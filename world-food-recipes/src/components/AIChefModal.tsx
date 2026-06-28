import React, { useState } from 'react';
import { X, Sparkles, Send, Bot, ChefHat, RefreshCw, Flame, Utensils } from 'lucide-react';
import { Recipe } from '../types';

interface AIChefModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRecipe?: Recipe | null;
}

export const AIChefModal: React.FC<AIChefModalProps> = ({ isOpen, onClose, initialRecipe }) => {
  const [messages, setMessages] = useState<{ sender: 'user' | 'ai'; text: string; time: string }[]>([
    {
      sender: 'ai',
      text: initialRecipe 
        ? `👨‍🍳 Hello! I see you're looking at **${initialRecipe.title}**. Ask me for ingredient substitutions, calorie modifications, or side dish pairings!`
        : `👨‍🍳 Greetings food lover! I am your AI Master Chef. Ask me anything about Pakistani curries, Italian artisanal pastas, Arabic mezzes, or Thai woks!`,
      time: 'Just now'
    }
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = initialRecipe ? [
    `How can I make this ${initialRecipe.title} healthier?`,
    `What side dish pairs well with this?`,
    `Can I cook this in an Air Fryer?`
  ] : [
    `Recommend a quick 15-min Pakistani dinner`,
    `What is the secret to authentic Roman Carbonara?`,
    `How to make fluffy Arabic Hummus?`,
    `Suggest a spicy vegetarian Thai stir-fry`
  ];

  const handleSend = async (customText?: string) => {
    const textToSend = customText || inputPrompt;
    if (!textToSend.trim() || isLoading) return;

    const userMsg = { sender: 'user' as const, text: textToSend, time: 'Just now' };
    setMessages(prev => [...prev, userMsg]);
    if (!customText) setInputPrompt('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai-chef', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: textToSend,
          recipeContext: initialRecipe ? {
            title: initialRecipe.title,
            cuisine: initialRecipe.cuisine,
            ingredients: initialRecipe.ingredients
          } : null
        })
      });

      const data = await res.json();
      setMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: data.reply || data.error || "I'm stirring another pot! Try asking again.",
          time: 'Just now'
        }
      ]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: "👨‍🍳 **Notice**: Could not connect to the kitchen server. Please check your internet connection.",
          time: 'Just now'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-md flex items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-stone-900 min-h-screen sm:min-h-[600px] sm:max-h-[85vh] sm:rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-4 text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
              <ChefHat className="w-6 h-6 animate-bounce" style={{ animationDuration: '3s' }} />
            </div>
            <div>
              <h2 className="font-extrabold text-lg tracking-tight flex items-center gap-1.5">
                <span>AI Master Chef</span>
                <Sparkles className="w-4 h-4 text-amber-200 fill-amber-200 animate-spin" style={{ animationDuration: '6s' }} />
              </h2>
              <p className="text-xs text-amber-100 font-medium">World Culinary Expert • Powered by Gemini</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-black/20 hover:bg-black/30 text-white flex items-center justify-center transition-all active:scale-90"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-stone-50 dark:bg-stone-950/40 no-scrollbar">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 max-w-[88%] ${m.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                m.sender === 'user'
                  ? 'bg-stone-800 text-white dark:bg-stone-200 dark:text-stone-900'
                  : 'bg-gradient-to-tr from-amber-500 to-orange-500 text-white'
              }`}>
                {m.sender === 'user' ? <Utensils className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                m.sender === 'user'
                  ? 'bg-orange-600 text-white rounded-tr-none font-medium'
                  : 'bg-white dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700/80 text-stone-800 dark:text-stone-100 rounded-tl-none whitespace-pre-wrap'
              }`}>
                {m.text}
                <span className={`block text-[9px] mt-1 text-right ${m.sender === 'user' ? 'text-orange-200' : 'text-stone-400'}`}>
                  {m.time}
                </span>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 items-center text-stone-500 dark:text-stone-400 text-xs italic animate-pulse pl-2">
              <RefreshCw className="w-4 h-4 animate-spin text-orange-500" />
              <span>AI Master Chef is tasting spices and formulating advice...</span>
            </div>
          )}
        </div>

        {/* Quick Prompts Chips */}
        <div className="px-4 py-2 bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800 overflow-x-auto no-scrollbar flex gap-2">
          {quickPrompts.map((qp, qidx) => (
            <button
              key={qidx}
              onClick={() => handleSend(qp)}
              disabled={isLoading}
              className="px-3 py-1.5 rounded-full bg-orange-50 dark:bg-stone-800 border border-orange-200 dark:border-stone-700 text-[11px] font-medium text-orange-800 dark:text-orange-300 whitespace-nowrap hover:bg-orange-100 dark:hover:bg-stone-700 active:scale-95 transition-all shrink-0 flex items-center gap-1"
            >
              <Flame className="w-3 h-3 text-orange-500 shrink-0" />
              <span>{qp}</span>
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800">
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex items-center gap-2 bg-stone-100 dark:bg-stone-800 p-1.5 rounded-2xl border border-stone-200 dark:border-stone-700 focus-within:ring-2 focus-within:ring-orange-500 transition-all"
          >
            <input
              type="text"
              placeholder={initialRecipe ? `Ask culinary tips for ${initialRecipe.title}...` : "Ask recipe ideas or cooking secrets..."}
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              disabled={isLoading}
              className="flex-1 bg-transparent px-3 py-2 text-xs sm:text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!inputPrompt.trim() || isLoading}
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 disabled:opacity-40 text-white flex items-center justify-center transition-all shadow-md active:scale-90 shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
