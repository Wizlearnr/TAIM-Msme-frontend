"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useProfileContext } from "../_context/ProfileContext";
import { useChat } from "./hooks/useChat";
import MessageBubble from "./components/MessageBubble";
import ChatInput from "./components/ChatInput";
import TypingIndicator from "./components/TypingIndicator";
import FindSchemesButton from "./components/FindSchemesButton";
import ChatFooter from "./components/ChatFooter";

const MSMEChatInterface = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, setMessages } = useProfileContext();
  const router = useRouter();
  const { isTyping, sendMessage, handleFeedback } = useChat(messages, setMessages);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFindSchemes = () => {
    router.push("/recommendedSchemes");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Chat Container */}
      <div className="max-w-7xl mx-auto h-[calc(100vh-180px)] flex flex-col">
        {/* Messages Area */}
        <div className="flex-1 px-8 py-8 pb-32 overflow-y-auto space-y-8">
          {messages.map((message, index) => (
            <MessageBubble
              key={`${index}-${message.query}`}
              message={message}
              index={index}
              onFeedback={handleFeedback}
            />
          ))}

          {/* Typing Indicator */}
          {isTyping && <TypingIndicator />}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <ChatInput onSendMessage={sendMessage} disabled={isTyping} />
      </div>

      {/* Find Schemes Button */}
      <FindSchemesButton onClick={handleFindSchemes} />

      {/* Footer */}
      <ChatFooter />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default MSMEChatInterface;