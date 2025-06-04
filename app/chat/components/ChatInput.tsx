"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSendMessage, disabled = false }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || disabled) return;

    onSendMessage(trimmedInput);
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="absolute bottom-20 left-0 right-0 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-white rounded-2xl shadow-md border border-gray-300 p-2">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about MSME schemes..."
              className="flex-1 px-6 py-4 bg-transparent border-0 focus:outline-none text-gray-700 placeholder-gray-400 font-medium"
              disabled={disabled}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || disabled}
              className="bg-gradient-to-br from-emerald-500 via-blue-600 to-purple-600 hover:from-emerald-500 hover:to-blue-600 text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;