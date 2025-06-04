import { Session } from "@/models/session";
import { apiClient } from ".";

export const createSession = async () => {
  const { data } = await apiClient.post<Session>("/create-session");

  return data;
};
