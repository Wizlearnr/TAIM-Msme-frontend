import { BusinessProfile } from "@/models/business-profile";
import { useQuery } from "@tanstack/react-query";
import { BASEURL } from ".";

// Mock API functions (replace with actual axios/react-query implementation)
const fetchBusinessProfiles = async (): Promise<BusinessProfile[]> => {

  const skip = 0;
  const limit = 10;

  const url = `${BASEURL}business-profiles?skip=${skip}&limit=${limit}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch business profiles");
  }
  const data = await response.json();

  return data ;
};

export const useBusinessProfiles = () => {
  const query = useQuery({
    queryKey: ["businessProfiles"],
    queryFn: fetchBusinessProfiles,
  });

  return query;
};

export const createBusinessProfile = async (profileData: BusinessProfile) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return profileData;
};
