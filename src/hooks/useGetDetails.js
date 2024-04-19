import { useQuery } from "@tanstack/react-query";
import { getDetails } from "../services/apiData";

export function useGetDetails(movieId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["details", movieId],
    queryFn: () => getDetails(movieId),
  });

  return { data, isLoading, error };
}
