import { useQuery } from "@tanstack/react-query";
import { apiClient } from ".";

export const getRecommendedSchemes = async (): Promise<string> => {
  const { data } = await apiClient.get("recommend-schemes");
  return data.answer;
};

export const useRecommendedSchemes = () => {
  return useQuery({
    queryKey: ["recommendedSchemes", new Date()],
    queryFn: getRecommendedSchemes,
  });
};
