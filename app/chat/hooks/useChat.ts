import { useState, useCallback } from "react";
import { fetchChatResponse } from "@/services/chat";
import { Message } from "@/models/message";

export const useChat = (
  messages: Message[],
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) => {
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback(async (input: string) => {
    const userMessage: Message = {
      query: input,
      answer: "",
      status: "neutral",
    };

    // Update state with user message
    setMessages((prev) => [...prev, userMessage]);
    
    setTimeout(() => {
      setIsTyping(true);
    }, 500);

    try {
      const response = await fetchChatResponse(input);

      const botMessage: Message = {
        query: "",
        answer: response.answer,
        status: response.status || "neutral",
      };

      // Append bot message
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching chat response:", error);

      const errorMessage: Message = {
        query: "",
        answer: "Something went wrong. Please try again.",
        status: "neutral",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  }, [setMessages]);

  const handleFeedback = useCallback((message: Message, isLike: boolean) => {
    const feedbackStatus = isLike ? "like" : "dislike";

    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.answer === message.answer ? { ...msg, status: feedbackStatus } : msg
      )
    );
  }, [setMessages]);

  return {
    isTyping,
    sendMessage,
    handleFeedback,
  };
};