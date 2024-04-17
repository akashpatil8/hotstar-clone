import { useQuery } from "@tanstack/react-query";
import { getTrending } from "../services/apiData";

export function useGetTrending() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["trending"],
    queryFn: getTrending,
  });

  return { trendingData: data?.results, isLoading, error };
}
