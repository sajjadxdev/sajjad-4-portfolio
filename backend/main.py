import os
import chromadb
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from dotenv import load_dotenv
import httpx

# Load environment variables from .env file if present
load_dotenv()

# ============================================================
# FastAPI Setup
# ============================================================

app = FastAPI(
    title="Sajjad Ahmad - Portfolio AI & RAG Backend",
    description="Production-grade FastAPI backend powered by ChromaDB vector search and Groq LLM integration.",
    version="1.0.0"
)

# Allow requests from Next.js and Vercel production domain
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://sajjadahmadai.vercel.app",
        "*"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============================================================
# ChromaDB Setup
# ============================================================

DB_PATH = os.path.join(os.path.dirname(__file__), "chroma_db")
client = chromadb.PersistentClient(path=DB_PATH)

# Get or create the vector collection (must match name in seed_db.py)
collection = client.get_or_create_collection(
    name="portfolio",
    metadata={"hnsw:space": "l2"}
)

print(f"📂 ChromaDB Connected! Collection: '{collection.name}' | Documents: {collection.count()}")

# ============================================================
# Pydantic Models
# ============================================================

class MessageItem(BaseModel):
    sender: str
    text: str
    timestamp: Optional[str] = None

class ChatRequest(BaseModel):
    message: str
    history: Optional[List[MessageItem]] = []

class ChatResponse(BaseModel):
    reply: str
    answer: Optional[str] = None
    retrieved_context: Optional[List[str]] = None
    distance_score: Optional[float] = None
    status: str

class SearchRequest(BaseModel):
    query: str
    top_k: int = 1

class SearchResult(BaseModel):
    answer: str

class SearchResponse(BaseModel):
    success: bool
    query: str
    answer: Optional[str] = None
    total_found: int
    results: List[SearchResult]

# ============================================================
# Root & Search Endpoints
# ============================================================

@app.get("/")
def root():
    return {
        "status": "online",
        "message": "Sajjad AI Portfolio Backend is running!",
        "collection": collection.name,
        "documents": collection.count()
    }

def extract_clean_answer(doc_str: str, meta: dict) -> str:
    # 1. Try getting answer directly from metadata if present
    if meta and meta.get("answer"):
        return meta.get("answer").strip()
    # 2. If document string has "\nAnswer:\n" or "Answer:", split and take the answer part
    if "Answer:" in doc_str:
        return doc_str.split("Answer:")[-1].strip()
    # 3. Otherwise return the document itself
    return doc_str.strip()

def extract_clean_question(doc_str: str, meta: dict) -> str:
    if meta and meta.get("question"):
        return meta.get("question").strip()
    if "Question:" in doc_str:
        return doc_str.split("Question:")[-1].split("Answer:")[0].strip()
    if meta and meta.get("category"):
        return meta.get("category")
    return "Portfolio Question"

def smart_intent_and_keyword_filter(query: str, documents: list, metadatas: list, distances: list):
    lower_q = query.lower().strip()
    
    # 1. Off-Topic / Out-of-Scope Guardrail
    off_topic_words = [
        "kfc", "order", "food", "hungry", "pizza", "burger", "weather", 
        "joke", "movie", "song", "game", "play", "2+2", "math", "calculate", 
        "president", "politics", "recipe", "restaurant", "buy", "sell"
    ]
    if any(w in lower_q.split() or w in lower_q for w in off_topic_words) and not any(k in lower_q for k in ["sajjad", "ai", "ml", "work", "job", "skill", "cv", "project"]):
        return {
            "is_off_topic": True,
            "reply": "I'm sorry, I am Sajjad's AI Portfolio Assistant and can only answer questions about his AI/ML skills, projects, work experience, education, and how to hire or contact him!"
        }

    # 2. Identity / Bio / Summary Intents
    if any(phrase in lower_q for phrase in ["who are you", "who is sajjad", "what is your name", "tell me about yourself", "about you", "introduce", "your background", "who r u"]):
        bio_reply = "My full name is Sajjad Ahmad. I am an AI/ML Engineer and Backend Developer based in Lahore, Pakistan, specializing in scalable AI applications, LLMs, RAG pipelines, Computer Vision (YOLO), and FastAPI backend development."
        return {"is_off_topic": False, "override_answer": bio_reply, "best_index": 0}

    if any(phrase in lower_q for phrase in ["summarize his cv", "cv summary", "summary of cv", "summarize cv", "resume summary"]):
        cv_summary = "Here is a summary of Sajjad Ahmad's CV:\n\n• Role: AI/ML Engineer & Backend Developer\n• Education: BS in Computer Science (Graduated 2024, FATA University)\n• Current Company: Apptex Software Solution (Lahore, Pakistan)\n• Experience: Backend API developer at INNOVATION.TECH and AI/ML Intern at Bave Technologies.\n• Top Skills: Python, PyTorch, TensorFlow, LangChain, LlamaIndex, RAG Pipelines, YOLO Computer Vision, FastAPI, Docker, and AWS.\n• Availability: Open for freelance projects, contracts, and full-time remote/local roles!"
        return {"is_off_topic": False, "override_answer": cv_summary, "best_index": 0}

    # 3. Keyword Overlap Scoring & Re-Ranking among retrieved chunks
    best_idx = 0
    best_score = -999.0
    
    stopwords = {"what", "when", "where", "who", "why", "how", "is", "are", "the", "you", "your", "his", "her", "can", "any", "there", "for", "and", "with", "from", "have", "has", "did", "do", "does", "in", "on", "at", "to", "of", "me", "am", "i"}
    q_words = [w for w in lower_q.replace("?", "").replace(".", "").split() if w not in stopwords and len(w) >= 2]
    
    for i in range(len(documents)):
        doc_str = documents[i].lower()
        meta = metadatas[i] if i < len(metadatas) and metadatas[i] else {}
        q_str = meta.get("question", "").lower()
        cat_str = meta.get("category", "").lower()
        
        dist = distances[i] if i < len(distances) else 1.5
        score = 2.0 - dist
        
        for qw in q_words:
            if qw in q_str or qw in cat_str:
                score += 0.8
            elif qw in doc_str:
                score += 0.4
                
        if any(w in q_words for w in ["work", "working", "company", "recent", "current", "role", "job", "employer", "experience"]):
            if any(cw in doc_str or cw in q_str for cw in ["apptex", "innovation", "bave", "company", "role", "work", "experience", "current"]):
                score += 0.9
        elif any(w in q_words for w in ["education", "study", "degree", "university", "college", "school", "graduate", "graduation", "year"]):
            if any(cw in doc_str or cw in q_str for cw in ["fata", "graduated", "bs", "computer science", "coursework", "education", "2024"]):
                score += 0.9
        elif any(w in q_words for w in ["skill", "tech", "stack", "technologies", "tools"]):
            if any(cw in doc_str or cw in q_str for cw in ["python", "pytorch", "fastapi", "skills", "docker", "pipeline"]):
                score += 0.9
                
        if score > best_score:
            best_score = score
            best_idx = i
            
    return {"is_off_topic": False, "best_index": best_idx}

@app.post("/api/search", response_model=SearchResponse)
def search(req: SearchRequest):
    if collection.count() == 0:
        raise HTTPException(
            status_code=404,
            detail="Portfolio database is empty. Please run `python seed_db.py`."
        )

    top_k = min(max(5, req.top_k), collection.count())
    results = collection.query(
        query_texts=[req.query],
        n_results=top_k
    )

    documents = results.get("documents", [[]])[0]
    metadatas = results.get("metadatas", [[]])[0] if "metadatas" in results else []
    distances = results.get("distances", [[]])[0] if "distances" in results else [0.0] * len(documents)

    smart_res = smart_intent_and_keyword_filter(req.query, documents, metadatas, distances)
    if smart_res.get("is_off_topic"):
        reply = smart_res["reply"]
        return SearchResponse(success=True, query=req.query, answer=reply, total_found=1, results=[SearchResult(answer=reply)])

    if smart_res.get("override_answer"):
        reply = smart_res["override_answer"]
        return SearchResponse(success=True, query=req.query, answer=reply, total_found=1, results=[SearchResult(answer=reply)])

    best_idx = smart_res.get("best_index", 0)
    meta = metadatas[best_idx] if best_idx < len(metadatas) and metadatas[best_idx] else {}
    top_answer = extract_clean_answer(documents[best_idx], meta)

    output = [SearchResult(answer=top_answer)]
    return SearchResponse(
        success=True,
        query=req.query,
        answer=top_answer,
        total_found=len(output),
        results=output
    )

# ============================================================
# Chat Endpoint with Groq LLM & ChromaDB Fallback
# ============================================================

@app.post("/api/chat", response_model=ChatResponse)
async def chat_endpoint(req: ChatRequest):
    user_query = req.message.strip()
    if not user_query:
        raise HTTPException(status_code=400, detail="Query message cannot be empty.")

    # 1. Check if ChromaDB collection has data
    if collection.count() == 0:
        msg = "My ChromaDB database is currently empty! Please run `python seed_db.py` in the backend directory to populate Sajjad's CV and project data."
        return ChatResponse(
            reply=msg,
            answer=msg,
            status="empty_db"
        )

    # 2. Retrieve top 5 similar semantic chunks from ChromaDB
    n_results = min(5, collection.count())
    results = collection.query(
        query_texts=[user_query],
        n_results=n_results
    )

    documents = results.get("documents", [[]])[0]
    metadatas = results.get("metadatas", [[]])[0] if "metadatas" in results else []
    distances = results.get("distances", [[]])[0] if "distances" in results else [0.0]
    top_distance = distances[0] if distances else 999.0

    # 3. Smart Intent & Keyword Routing
    smart_res = smart_intent_and_keyword_filter(user_query, documents, metadatas, distances)
    if smart_res.get("is_off_topic"):
        msg = smart_res["reply"]
        return ChatResponse(reply=msg, answer=msg, status="off_topic_blocked")

    if smart_res.get("override_answer"):
        msg = smart_res["override_answer"]
        return ChatResponse(reply=msg, answer=msg, status="success_intent")

    best_idx = smart_res.get("best_index", 0)
    best_doc = documents[best_idx] if best_idx < len(documents) else documents[0]
    best_meta = metadatas[best_idx] if best_idx < len(metadatas) and metadatas[best_idx] else {}

    # Guardrail: Check relevance distance
    DISTANCE_THRESHOLD = 1.65
    if not documents or top_distance > DISTANCE_THRESHOLD:
        msg = "I'm sorry, I don't have information about that in Sajjad's portfolio! Feel free to ask about his AI skills, LLM & RAG projects, education, or contact details, or email him directly at sajjadxdev@gmail.com."
        return ChatResponse(
            reply=msg,
            answer=msg,
            distance_score=top_distance,
            status="not_found_fallback"
        )

    context_text = "\n\n".join(documents)

    # 4. Check if GROQ_API_KEY is available
    groq_api_key = os.getenv("GROQ_API_KEY")

    if groq_api_key and groq_api_key.strip():
        try:
            system_prompt = f"""You are Sajjad Ahmad's official AI Portfolio Assistant.
Your task is to answer the user's question concisely and naturally in a human-like tone, using ONLY the facts provided in the Retrieved Context below.

CRITICAL GUARDRAILS:
1. Be concise and human-like: Answer in a few words or short, natural sentences. Do not give overly long explanations or unnecessary verbose details.
2. Stay strictly within profile: DO NOT answer questions outside of Sajjad's profile, skills, projects, education, or contact details. If the user asks general trivia or off-topic questions, politely reply: "I am Sajjad's portfolio assistant and can only answer questions about his skills, experience, and projects!"
3. Do not invent facts: If the answer is not in the context, do not make it up.

Retrieved Context from Sajjad's Portfolio:
{context_text}
"""
            async with httpx.AsyncClient(timeout=10.0) as http_client:
                response = await http_client.post(
                    "https://api.groq.com/openai/v1/chat/completions",
                    headers={
                        "Authorization": f"Bearer {groq_api_key.strip()}",
                        "Content-Type": "application/json"
                    },
                    json={
                        "model": "llama-3.3-70b-versatile",
                        "messages": [
                            {"role": "system", "content": system_prompt},
                            {"role": "user", "content": user_query}
                        ],
                        "temperature": 0.3,
                        "max_tokens": 250
                    }
                )
                
                if response.status_code == 200:
                    data = response.json()
                    refined_reply = data["choices"][0]["message"]["content"].strip()
                    return ChatResponse(
                        reply=refined_reply,
                        answer=refined_reply,
                        retrieved_context=documents,
                        distance_score=top_distance,
                        status="success_llm"
                    )
                else:
                    print(f"⚠️ Groq API Error ({response.status_code}): {response.text}")
        except Exception as e:
            print(f"⚠️ Groq API exception: {e}")

    # 5. Fallback if no GROQ_API_KEY is present (or if API call failed):
    reply_text = extract_clean_answer(best_doc, best_meta)

    return ChatResponse(
        reply=reply_text,
        answer=reply_text,
        retrieved_context=documents,
        distance_score=top_distance,
        status="success_db"
    )

# ============================================================
# Run Server
# ============================================================

if __name__ == "__main__":
    import uvicorn
    print("🚀 Starting Sajjad Portfolio FastAPI & ChromaDB Server on port 8000...")
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)