import { useQuery } from "@tanstack/react-query";
import { getTrending } from "../services/apiData";

export function useGetTrending(mediaType) {
  const { data, isLoading, error } = useQuery({
    queryKey: [`trending-${mediaType}`, mediaType],
    queryFn: () => getTrending({ mediaType }),
  });

  if (error) console.error(error);

  return { trendingData: data?.results, isLoading, error };
}
