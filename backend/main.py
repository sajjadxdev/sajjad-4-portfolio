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
    retrieved_context: Optional[List[str]] = None
    distance_score: Optional[float] = None
    status: str

class SearchRequest(BaseModel):
    query: str
    top_k: int = 1

class SearchResult(BaseModel):
    question: str
    answer: str
    document: str
    distance: float

class SearchResponse(BaseModel):
    success: bool
    query: str
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

@app.post("/api/search", response_model=SearchResponse)
def search(req: SearchRequest):
    if collection.count() == 0:
        raise HTTPException(
            status_code=404,
            detail="Portfolio database is empty. Please run `python seed_db.py`."
        )

    top_k = min(req.top_k, collection.count())
    results = collection.query(
        query_texts=[req.query],
        n_results=top_k
    )

    documents = results.get("documents", [[]])[0]
    metadatas = results.get("metadatas", [[]])[0]
    distances = results.get("distances", [[]])[0] if "distances" in results else [0.0] * len(documents)

    output = []
    for i in range(len(documents)):
        meta = metadatas[i] if i < len(metadatas) and metadatas[i] else {}
        output.append(
            SearchResult(
                question=meta.get("question", meta.get("category", "General")),
                answer=documents[i],
                document=documents[i],
                distance=distances[i] if i < len(distances) else 0.0
            )
        )

    return SearchResponse(
        success=True,
        query=req.query,
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
        return ChatResponse(
            reply="My ChromaDB database is currently empty! Please run `python seed_db.py` in the backend directory to populate Sajjad's CV and project data.",
            status="empty_db"
        )

    # 2. Retrieve top 3 similar semantic chunks from ChromaDB
    n_results = min(3, collection.count())
    results = collection.query(
        query_texts=[user_query],
        n_results=n_results
    )

    documents = results.get("documents", [[]])[0]
    distances = results.get("distances", [[]])[0] if "distances" in results else [0.0]
    top_distance = distances[0] if distances else 999.0

    # 3. Guardrail: Check relevance distance
    DISTANCE_THRESHOLD = 1.35
    if not documents or top_distance > DISTANCE_THRESHOLD:
        return ChatResponse(
            reply="I'm sorry, I don't have information about that in Sajjad's portfolio! Feel free to ask about his AI skills, LLM & RAG projects, education, or contact details, or email him directly at sajjadxdev@gmail.com.",
            distance_score=top_distance,
            status="not_found_fallback"
        )

    context_text = "\n\n".join(documents)

    # 4. Check if GROQ_API_KEY is available
    groq_api_key = os.getenv("GROQ_API_KEY")

    if groq_api_key and groq_api_key.strip():
        # Call Groq API to refine the answer!
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
            # Call Groq REST API using httpx (no extra SDK required!)
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
                        retrieved_context=documents,
                        distance_score=top_distance,
                        status="success_llm"
                    )
                else:
                    print(f"⚠️ Groq API Error ({response.status_code}): {response.text}")
        except Exception as e:
            print(f"⚠️ Groq API exception: {e}")

    # 5. Fallback if no GROQ_API_KEY is present (or if API call failed):
    # Return the most similar retrieved answer directly from ChromaDB!
    reply_text = f"{documents[0]}"
    if len(documents) > 1 and distances[1] < 1.1:
        reply_text += f"\n\nAdditionally: {documents[1]}"

    return ChatResponse(
        reply=reply_text,
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