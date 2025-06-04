"use client";

import { Message } from "@/models/message";
import { ThumbsUp, ThumbsDown } from "lucide-react";


interface FeedbackButtonsProps {
  message: Message;
  onFeedback: (message: Message, isLike: boolean) => void;
}

const FeedbackButtons = ({ message, onFeedback }: FeedbackButtonsProps) => {
  return (
    <div
      className={`
        flex space-x-2 mt-4
        transition-opacity duration-300
        ${
          message.status === "neutral"
            ? "opacity-0 group-hover:opacity-100"
            : "opacity-100"
        }
      `}
    >
      <button
        onClick={() => onFeedback(message, true)}
        className={`p-2 rounded-xl transition-all duration-200 group/like ${
          message.status === "like"
            ? "bg-green-100"
            : "hover:bg-green-50"
        }`}
      >
        <ThumbsUp
          className={`w-4 h-4 transition-colors duration-200 ${
            message.status === "like"
              ? "text-green-600"
              : "text-gray-400 group-hover/like:text-green-600"
          }`}
        />
      </button>

      <button
        onClick={() => onFeedback(message, false)}
        className={`p-2 rounded-xl transition-all duration-200 group/dislike ${
          message.status === "dislike"
            ? "bg-red-100"
            : "hover:bg-red-50"
        }`}
      >
        <ThumbsDown
          className={`w-4 h-4 transition-colors duration-200 ${
            message.status === "dislike"
              ? "text-red-600"
              : "text-gray-400 group-hover/dislike:text-red-600"
          }`}
        />
      </button>
    </div>
  );
};

export default FeedbackButtons;