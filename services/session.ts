import { apiClient } from ".";

export const createSession = async () => {
  return apiClient.post("/create-session");
};
