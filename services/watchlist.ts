import { useQuery } from "@tanstack/react-query";
import { WatchList, WatchListBody } from "@/models/watchlist";
import axios from "axios";

const fetchWatchLists = async (): Promise<WatchList[]> => {
  const { data } = await axios.get<WatchList[]>("/scheme-watchlist");

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
  const { data } = await axios.post<WatchList>("/scheme-watchlist", watchlist);
  return data;
};
