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
  const { data } = await apiClient.post<BusinessProfile>(
    "/business-profile",
    profileData
  );

  return data;
};

export const updateBusinessProfile = async (profileData: BusinessProfile) => {
  const { data } = await apiClient.put<BusinessProfile>(
    `/business-profile/${profileData.business_id}`,
    profileData
  );

  return data;
};
