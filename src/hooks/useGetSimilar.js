import { useQuery } from "@tanstack/react-query";
import { getLatest, getSimilar } from "../services/apiData";

export function useGetSimilar(moiveId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["similar", moiveId],
    queryFn: () => getSimilar(moiveId),
  });

  return { similarData: data?.results, isLoading, error };
}
