import os
import chromadb

# =====================================================================
# CHROMADB SEED SCRIPT
# Run this file once (`python seed_db.py`) to pre-populate ChromaDB
# with Sajjad Ahmad's CV, skills, projects, and contact details!
# =====================================================================

DB_PATH = os.path.join(os.path.dirname(__file__), "")
print(f"📂 Initializing persistent ChromaDB at: {DB_PATH}")

chroma_client = chromadb.PersistentClient(path=DB_PATH)
collection = chroma_client.get_or_create_collection(
    name="sajjad_portfolio",
    metadata={"hnsw:space": "l2"}
)

# Clear existing documents if reseeding
existing_count = collection.count()
if existing_count > 0:
    print(f"🧹 Clearing {existing_count} existing documents from collection...")
    # Get all IDs and delete them
    all_data = collection.get()
    if all_data and "ids" in all_data and all_data["ids"]:
        collection.delete(ids=all_data["ids"])

# Portfolio Knowledge Base Chunks
documents = [
    # Bio & Summary
    "Sajjad Ahmad is a top Machine Learning Engineer and AI Developer based in Peshawar, Pakistan. He specializes in designing, training, and deploying production-grade AI systems, Large Language Models (LLMs), RAG pipelines, and Computer Vision solutions.",
    
    # Skills & Tech Stack
    "Sajjad's core technical skills include: Python, PyTorch, TensorFlow, Scikit-learn, HuggingFace Transformers, LangChain, LlamaIndex, RAG Pipelines, Prompt Engineering, Fine-tuning (LoRA/QLoRA), OpenCV, YOLO, SpaCy, NLTK, FastAPI, Docker, AWS, Git, CI/CD, and Vector Databases (Pinecone, ChromaDB, Qdrant, Weaviate).",
    
    # Project 1: Enterprise RAG
    "Project: Enterprise RAG & LLM Assistant Platform. Sajjad designed and deployed an end-to-end Retrieval-Augmented Generation (RAG) system processing 100,000+ enterprise documents with sub-second retrieval. He integrated vector search (Pinecone) with custom embedding models and LangChain agents, boosting response accuracy by 40%, and built scalable asynchronous API endpoints using FastAPI and Docker on AWS.",
    
    # Project 2: Computer Vision
    "Project: Real-Time Computer Vision & Object Detection System. Sajjad trained and optimized custom YOLO models for real-time video stream analysis and automated anomaly detection. He reduced model inference latency by 30% using model quantization and TensorRT optimization, and implemented full live monitoring dashboards.",
    
    # Project 3: Voice AI & NLP Trading
    "Project: AI Voice Assistant & NLP Trading Analyzer. Sajjad developed speech-to-text and speech synthesis pipelines for hands-free conversational AI interaction. He also implemented sentiment analysis and entity extraction on financial news streams to generate predictive trading signals.",
    
    # Education
    "Education: Sajjad Ahmad holds a Bachelor of Science in Computer Science with a focus on Artificial Intelligence and Deep Learning from Peshawar, Pakistan.",
    
    # Contact & Hire
    "Contact & Hiring: You can hire Sajjad Ahmad for freelance, contract, or full-time ML and AI roles (remote worldwide or local in Peshawar). Email: sajjadxdev@gmail.com | Phone/WhatsApp: +92 316 6400174 | LinkedIn: https://linkedin.com/in/sajjadxdev | GitHub: https://github.com/sajjadxdev | Website: https://sajjadahmadai.vercel.app",
    
    # Location & Availability
    "Sajjad Ahmad is based in Peshawar, Khyber Pakhtunkhwa, Pakistan. He is available for remote projects worldwide and local consultations in Pakistan."
]

ids = [f"doc_{i+1}" for i in range(len(documents))]
metadatas = [
    {"category": "bio"},
    {"category": "skills"},
    {"category": "project_rag"},
    {"category": "project_cv"},
    {"category": "project_nlp"},
    {"category": "education"},
    {"category": "contact"},
    {"category": "location"}
]

print(f"📥 Inserting {len(documents)} knowledge chunks into ChromaDB...")
collection.add(
    documents=documents,
    ids=ids,
    metadatas=metadatas
)

print(f"✅ Success! ChromaDB collection 'sajjad_portfolio' now contains {collection.count()} documents.")
print("🎉 You can now start the FastAPI server with: `uvicorn main:app --reload --port 8000`")
