import { useQuery } from "@tanstack/react-query";
import { BASEURL } from ".";
import { WatchList } from "@/models/watchlist";


const fetchWatchLists = async (
    businessId: number,
    token: string
): Promise<WatchList[]> => {

  const url = `${BASEURL}scheme-watchlist?business_id=${businessId}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "token": token,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch business profiles");
  }
  const data = await response.json();

  return data ;
};

export const useWatchLists = (
    businessId: number,
    token: string
) => {
  const query = useQuery({
    queryKey: ["watchLists"],
    queryFn: () => fetchWatchLists(businessId, token),
  });

  return query;
};



export const addToWatchLists = async (watchlist: WatchList) => {


};
