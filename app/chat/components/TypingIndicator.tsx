"use client";

import { Bot } from "lucide-react";

const TypingIndicator = () => {
  return (
    <div className="flex justify-start animate-[fadeInUp_0.4s_ease-out]">
      <div className="relative mr-12">
        <div className="absolute -left-6 top-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse border border-white/20">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div className="bg-gray-50 px-6 py-4 rounded-3xl rounded-bl-lg shadow-sm border border-gray-200 ml-6">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 font-medium">Analyzing</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;