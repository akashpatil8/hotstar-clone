import { useQuery } from "@tanstack/react-query";
import { getSimilar } from "../services/apiData";

export function useGetSimilar({ itemId, mediaType }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["similar", itemId],
    queryFn: () => getSimilar({ itemId, mediaType }),
  });

  return { similarData: data?.results, isLoading, error };
}
