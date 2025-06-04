"use client";

import { Bot, User } from "lucide-react";
import FeedbackButtons from "./FeedbackButtons";
import { Message } from "@/models/message";

interface MessageBubbleProps {
  message: Message;
  index: number;
  onFeedback: (message: Message, isLike: boolean) => void;
}

const MessageBubble = ({ message, index, onFeedback }: MessageBubbleProps) => {
  const isUserMessage = !!message.query;

  return (
    <div
      className={`flex ${
        isUserMessage ? "justify-end" : "justify-start"
      } group`}
      style={{
        animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${
          index * 0.1
        }s both`,
      }}
    >
      <div
        className={`relative max-w-2xl ${
          isUserMessage ? "ml-12" : "mr-12"
        }`}
      >
        {/* Message Bubble */}
        <div
          className={`relative px-6 py-4 ${
            isUserMessage
              ? "bg-gradient-to-br from-purple-500 to-blue-600 text-white rounded-3xl rounded-br-lg shadow-lg border border-blue-400/30"
              : "bg-gray-50 text-gray-800 rounded-3xl rounded-bl-lg shadow-sm border border-gray-200"
          }`}
        >
          {/* Bot Avatar */}
          {!isUserMessage && (
            <div className="absolute -left-6 top-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-100 border border-white/20">
              <Bot className="w-6 h-6 text-white" />
            </div>
          )}

          {/* User Avatar */}
          {isUserMessage && (
            <div className="absolute -right-6 top-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-100 border border-white/20">
              <User className="w-6 h-6 text-white" />
            </div>
          )}

          {/* Message Content */}
          <div className={`${!isUserMessage ? "ml-6" : "mr-6"}`}>
            <p
              className={`leading-relaxed ${
                isUserMessage
                  ? "text-white/96 font-medium"
                  : "text-gray-700 font-medium"
              }`}
            >
              {message.query || message.answer}
            </p>

            {/* Feedback buttons for bot messages */}
            {!isUserMessage && (
              <FeedbackButtons message={message} onFeedback={onFeedback} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;