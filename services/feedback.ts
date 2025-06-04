import { FeedbackBody } from "@/models/feedback";
import { apiClient } from ".";

export const postFeedback = async (body: FeedbackBody) => {
  const response = await apiClient.post("/feedback", body);
  return response.data;
};
