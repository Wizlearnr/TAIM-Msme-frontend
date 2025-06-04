import { BusinessProfile } from "@/models/business-profile";
import { Session } from "@/models/session";

export const getSelectedProfileFromLS = (): BusinessProfile | null => {
  const storedProfile = localStorage.getItem("selectedProfile");
  return storedProfile ? JSON.parse(storedProfile) : null;
};

export const getSessionDataFromLS = (): Session | null => {
  const sessionData = localStorage.getItem("session");
  return sessionData ? JSON.parse(sessionData) : null;
};
