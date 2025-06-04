import { BusinessProfile } from "@/models/business-profile";

export const getSelectedProfileFromLS = (): BusinessProfile | null => {
  const storedProfile = localStorage.getItem("selectedProfile");
  return storedProfile ? JSON.parse(storedProfile) : null;
};
