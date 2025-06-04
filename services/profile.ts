import { BusinessProfile } from "@/models/business-profile";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from ".";

// Mock API functions (replace with actual axios/react-query implementation)
const fetchBusinessProfiles = async (): Promise<BusinessProfile[]> => {
  const skip = 0;
  const limit = 4;

  const { data } = await apiClient.get(`/business-profiles`, {
    params: {
      skip,
      limit,
    },
  });

  return data;
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
