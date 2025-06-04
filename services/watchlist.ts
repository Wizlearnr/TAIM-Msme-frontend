import { useQuery } from "@tanstack/react-query";
import { WatchList, WatchListBody } from "@/models/watchlist";
import { apiClient } from ".";

const fetchWatchLists = async (): Promise<WatchList[]> => {
  const { data } = await apiClient.get<WatchList[]>("/scheme-watchlist");

  return data;
};

export const useWatchLists = () => {
  const query = useQuery({
    queryKey: ["watch-lists"],
    queryFn: fetchWatchLists,
  });

  return query;
};

export const addToWatchLists = async (watchlist: WatchListBody) => {
  const { data } = await apiClient.post<WatchList>(
    "/scheme-watchlist",
    watchlist
  );
  return data;
};
