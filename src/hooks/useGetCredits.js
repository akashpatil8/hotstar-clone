import { useQuery } from "@tanstack/react-query";
import { getCredits, getDetails } from "../services/apiData";

export function useGetCredits(movieId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["credits", movieId],
    queryFn: () => getCredits(movieId),
  });

  return { creditsData: data?.cast, isLoading, error };
}
