"use client"

import React, { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import ShadowCard from "./ShadowCard"
import InnerShadowCard from "./InnerShadowEffect"
import {
  Bot,
  X,
  Send,
  Sparkles,
  RefreshCw,
  User,
  MessageSquare,
  CornerDownLeft,
  Loader2,
  CheckCircle2
} from "lucide-react"

interface Message {
  id: string
  sender: "ai" | "user"
  text: string
  timestamp: string
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    sender: "ai",
    text: "Hello! 👋 I am Sajjad's AI Assistant. I can answer questions about his ML expertise, LLM & RAG pipelines, projects, or how to hire him. How can I help you today?",
    timestamp: "Just now",
  },
]

const SUGGESTION_CHIPS = [
  "⚡ Top AI & ML skills?",
  "🚀 RAG & LLM experience",
  "💼 How can I hire Sajjad?",
  "📜 Summarize his CV",
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [unreadCount, setUnreadCount] = useState(1)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll to bottom whenever messages or typing state changes
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
      setUnreadCount(0)
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen, messages, isTyping])

  const handleSend = async (textToSend?: string) => {
    const messageText = textToSend || input
    if (!messageText.trim() || isTyping) return

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMsg])
    if (!textToSend) setInput("")
    setIsTyping(true)

    // 1. Try connecting to live FastAPI & RAG Backend
    try {
      const response = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText, history: messages })
      });
      if (response.ok) {
        const data = await response.json();
        const aiMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: "ai",
          text: data.answer || data.reply || "No answer returned from RAG database.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => [...prev, aiMsg]);
        setIsTyping(false);
        return;
      }
    } catch (error) {
      console.warn("FastAPI backend offline or unreachable, falling back to demo mode:", error);
    }

    // Simulated AI Response for UI demonstration
    setTimeout(() => {
      let aiReply = "Thank you for asking! 🤖 I am currently running in frontend demo mode while Sajjad connects my FastAPI & RAG backend. Feel free to explore his portfolio or email him directly at sajjadxdev@gmail.com!"
      const lower = messageText.toLowerCase()

      if (lower.includes("skill") || lower.includes("tech") || lower.includes("stack") || lower.includes("top ai")) {
        aiReply = "Sajjad specializes in Python, PyTorch, TensorFlow, LangChain, LlamaIndex, and FastAPI! 🚀 He has deep expertise in building RAG pipelines, fine-tuning LLMs (LoRA/QLoRA), Computer Vision (YOLO), and deploying scalable AI systems on AWS and Docker."
      } else if (lower.includes("rag") || lower.includes("llm") || lower.includes("experience") || lower.includes("project")) {
        aiReply = "Sajjad has designed and deployed enterprise RAG platforms processing over 100,000+ documents with sub-second retrieval using Pinecone and custom embedding models! He also builds real-time Computer Vision systems and NLP trading analyzers."
      } else if (lower.includes("hire") || lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("freelance")) {
        aiReply = "You can hire Sajjad for freelance, contract, or full-time AI/ML roles! 💼 Feel free to email him at sajjadxdev@gmail.com, call +92 316 6400174, or use the Contact form on this website. He is based in Peshawar and available for remote work worldwide!"
      } else if (lower.includes("cv") || lower.includes("resume") || lower.includes("summarize")) {
        aiReply = "Sajjad is a top Machine Learning Engineer and AI Developer in Peshawar. You can view or download his full official CV by clicking the 'CV' button or visiting the /cv page on this website! 📜"
      } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
        aiReply = "Hello there! 👋 Great to meet you. Feel free to ask me anything about Sajjad's AI projects, tech stack, or consultation availability!"
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: aiReply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prev) => [...prev, aiMsg])
      setIsTyping(false)
    }, 1400)
  }

  const handleClearChat = () => {
    setMessages(INITIAL_MESSAGES)
  }

  return (
    <>
      {/* FLOATING CHATBOT BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Hover Tooltip Banner (Desktop only when closed) */}
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full bg-card/90 backdrop-blur-md border border-border shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 animate-bounce group"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              Chat with AI Assistant
            </span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </div>
        )}

        {/* Main Trigger Button */}
        <div onClick={() => setIsOpen(!isOpen)} className="relative cursor-pointer group">
          <ShadowCard
            variant="button"
            className={cn(
              "w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
              isOpen ? "bg-primary text-primary-foreground" : "bg-card text-foreground"
            )}
          >
            {isOpen ? (
              <X className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 rotate-90 group-hover:rotate-0" />
            ) : (
              <div className="relative flex items-center justify-center">
                <Bot className="w-7 h-7 sm:w-8 sm:h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                {/* Glowing ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/40 to-purple-500/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            )}
          </ShadowCard>

          {/* Unread Badge */}
          {!isOpen && unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center border-2 border-background animate-pulse shadow-md">
              {unreadCount}
            </span>
          )}
        </div>
      </div>

      {/* ANIMATED CHAT WINDOW */}
      <div
        className={cn(
          "fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] h-[580px] max-h-[80vh] rounded-3xl overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right shadow-2xl border border-border/80 bg-card/95 backdrop-blur-2xl",
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-90 translate-y-8 pointer-events-none"
        )}
      >
        {/* HEADER */}
        <div className="relative p-4 border-b border-border/60 bg-gradient-to-r from-card via-card to-secondary/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 shadow-inner flex items-center justify-center">
              <img src="/sajjad.png" alt="Sajjad AI" className="w-full h-full object-cover scale-125 relative top-1" />
              <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-card animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-sm tracking-tight text-foreground">Sajjad AI Assistant</h3>
                <Sparkles className="w-3.5 h-3.5 text-primary animate-spin" style={{ animationDuration: "6s" }} />
              </div>
              <p className="text-[11px] text-muted-foreground font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />

              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleClearChat}
              title="Reset Chat"
              className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              title="Close Chat"
              className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* MESSAGE HISTORY AREA */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">
          {messages.map((msg) => {
            const isAi = msg.sender === "ai"
            return (
              <div
                key={msg.id}
                className={cn("flex items-start gap-2.5 max-w-[88%]", isAi ? "self-start" : "self-end ml-auto flex-row-reverse")}
              >
                {/* Avatar Icon */}
                <div
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold shadow-sm mt-1",
                    isAi ? "bg-primary/10 text-primary border border-primary/20" : "bg-foreground text-background"
                  )}
                >
                  {isAi ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>

                {/* Message Bubble */}
                <div className="space-y-1">
                  {isAi ? (
                    <InnerShadowCard className="p-3.5 rounded-2xl rounded-tl-sm text-sm leading-relaxed text-foreground bg-card/80 border border-border/40">
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                    </InnerShadowCard>
                  ) : (
                    <div className="p-3.5 rounded-2xl rounded-tr-sm text-sm leading-relaxed bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-md font-medium">
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  )}
                  <div
                    className={cn(
                      "text-[10px] text-muted-foreground px-1 flex items-center gap-1",
                      !isAi && "justify-end"
                    )}
                  >
                    <span>{msg.timestamp}</span>
                    {!isAi && <CheckCircle2 className="w-3 h-3 text-primary inline" />}
                  </div>
                </div>
              </div>
            )
          })}

          {/* TYPING INDICATOR */}
          {isTyping && (
            <div className="flex items-start gap-2.5 max-w-[85%] self-start animate-fade-in">
              <div className="w-7 h-7 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0 mt-1">
                <Bot className="w-4 h-4 animate-bounce" />
              </div>
              <InnerShadowCard className="p-3.5 rounded-2xl rounded-tl-sm text-sm text-muted-foreground bg-card/80 border border-border/40 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-primary" />
                <span className="text-xs font-medium italic">Sajjad AI is searching RAG knowledge base...</span>
                <div className="flex gap-1 ml-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"></span>
                </div>
              </InnerShadowCard>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* SUGGESTION CHIPS (PROMPT STARTERS) */}
        <div className="px-3 py-2 border-t border-border/40 bg-secondary/20 overflow-x-auto flex gap-1.5 no-scrollbar shrink-0">
          {SUGGESTION_CHIPS.map((chip, index) => (
            <button
              key={index}
              onClick={() => handleSend(chip)}
              disabled={isTyping}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-card hover:bg-primary hover:text-primary-foreground border border-border/60 transition-all duration-200 whitespace-nowrap shrink-0 shadow-2xs cursor-pointer disabled:opacity-50"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* INPUT AREA */}
        <div className="p-3 border-t border-border/60 bg-card/80 backdrop-blur-md">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex items-center gap-2"
          >
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about Sajjad..."
                disabled={isTyping}
                className="w-full pl-3.5 pr-8 py-2.5 rounded-xl bg-secondary/50 border border-border/80 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-60"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground text-xs pointer-events-none flex items-center gap-0.5">
                <CornerDownLeft className="w-3.5 h-3.5 opacity-60" />
              </span>
            </div>

            <ShadowCard
              variant="button"
              onClick={() => handleSend()}
              className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform cursor-pointer",
                input.trim() && !isTyping ? "bg-primary text-primary-foreground hover:scale-105" : "bg-secondary text-muted-foreground opacity-60 pointer-events-none"
              )}
            >
              <Send className="w-4 h-4" />
            </ShadowCard>
          </form>

          <div className="mt-1.5 text-center">
            {/* <p className="text-[10px] text-muted-foreground font-medium">
              ⚡ Powered by <span className="text-foreground font-semibold">FastAPI & RAG</span> • Built by Sajjad Ahmad
            </p> */}
          </div>
        </div>
      </div>
    </>
  )
}
