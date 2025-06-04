
import { ChatResponse } from "@/models/message";
import { apiClient } from ".";
import { useQuery } from "@tanstack/react-query";

export const fetchChatResponse = async (query: string, topK = 3, alpha = 0.5) => {
    try {
      const response = await apiClient.get<ChatResponse>(
        "/search",
        {
          params: {
            query,
            top_k: topK,
            alpha,
          },
        }
      );
  
      if (response.status === 200) {
        // add status to the response
        response.data = {
            ...response.data,
            status: "neutral", // default status
        }
        return response.data;
      } else {
        throw new Error("Failed to fetch chat response");
      }
    } catch (error) {
      console.error("Error fetching chat response:", error);
      throw error;
    }
}; 