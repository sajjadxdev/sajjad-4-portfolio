"use client"
import React, { useState, useEffect } from 'react';
import { X, Sparkles, Bot } from 'lucide-react';

export default function ChatTooltip() {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-hide the tooltip after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 1. Floating Tooltip */}
      {isVisible && (
        <div 
          className="fixed bottom-28 right-8 z-[9999] flex flex-col items-end gap-2 cursor-pointer transition-all duration-500 hover:scale-105" 
          onClick={() => setIsVisible(false)}
          style={{ animation: "float 3s ease-in-out infinite" }}
        >
          <style jsx>{`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0px); }
            }
          `}</style>
          
          <div className="relative flex items-center gap-2 px-4 py-3 rounded-full bg-[#161414] text-[#ede6d8] shadow-2xl border border-white/10">
            <Sparkles className="w-4 h-4 text-[#e0574d]" />
            <span className="text-sm font-semibold tracking-wide">
              Chat with AI Assistant!
            </span>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsVisible(false); }}
              className="ml-2 hover:bg-white/20 rounded-full p-1 transition-colors pointer-events-auto"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-[#161414] rotate-45 transform origin-center border-b border-r border-white/20" />
          </div>
        </div>
      )}

      {/* 2. Absolute Positioned Custom Icon Overlay */}
      {/* pointer-events-none lets the click pass through to the actual Qualzo widget underneath! */}
      <div className="fixed bottom-6 right-6 z-[9998] w-[60px] h-[60px] rounded-full bg-card shadow-2xl border border-border flex items-center justify-center pointer-events-none">
        <Bot className="w-8 h-8 text-primary pointer-events-none" />
        <div className="absolute -inset-1 rounded-full bg-[#b3261e]/40 blur-sm opacity-50 -z-10" />
      </div>
    </>
  );
}
