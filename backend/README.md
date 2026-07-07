# Sajjad Ahmad Portfolio — FastAPI & ChromaDB RAG Backend 🚀

This folder contains the backend for your portfolio chatbot, built with **FastAPI** and **ChromaDB** (which uses SQLite3 under the hood for metadata and vector storage).

## 📂 Structure
- `main.py` — The FastAPI server with CORS middleware, ChromaDB search, and distance threshold guardrails.
- `seed_db.py` — A helper script that pre-loads ChromaDB with your CV, project details, skills, and contact info.
- `requirements.txt` — Python dependencies.
- `chroma_db/` — (Generated automatically) The SQLite3 / vector database folder where ChromaDB stores your embeddings.

---

## ⚡ Quick Start Guide

### 1. Install Dependencies
Open a terminal in this `backend/` directory and install the packages:
```bash
cd backend
pip install -r requirements.txt
```

### 2. Seed the ChromaDB Database
Run the seed script once to populate the vector database with your portfolio facts:
```bash
python seed_db.py
```
*(You will see a confirmation message that 8 knowledge chunks were inserted into ChromaDB!)*

### 3. Start the FastAPI Server
Run the API server on port `8000`:
```bash
uvicorn main:app --reload --port 8000
```
Your API is now live at:
- **API Endpoint:** `http://localhost:8000/api/chat`
- **Interactive API Docs (Swagger UI):** `http://localhost:8000/docs`

---

## 🔗 Connecting to Next.js Frontend

In your Next.js frontend, when you want to switch from frontend demo mode to your live FastAPI server, open `app/components/Chatbot.tsx` and inside `handleSend`, replace the demo simulation with:

```typescript
try {
  const response = await fetch("http://localhost:8000/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: messageText, history: messages })
  });
  const data = await response.json();
  
  const aiMsg: Message = {
    id: (Date.now() + 1).toString(),
    sender: "ai",
    text: data.reply,
    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  };
  setMessages((prev) => [...prev, aiMsg]);
} catch (error) {
  console.error("API Error:", error);
}
```

---

## 🧠 How Hallucination Prevention Works
In `main.py`, when a user asks a question, ChromaDB calculates the **L2 distance** between the question embedding and your portfolio knowledge chunks:
- **Low Distance (< 1.35):** The question matches your CV/portfolio! The API returns the exact retrieved facts (or passes them to your LLM).
- **High Distance (> 1.35):** The question is unrelated (e.g., *"What is your favorite food?"* or *"Who won the World Cup?"*). The API immediately triggers the fallback: *"I'm sorry, I don't have information about that in Sajjad's portfolio!"* — **Zero hallucinations!**
