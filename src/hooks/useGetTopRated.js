import { useQuery } from "@tanstack/react-query";
import { getTopRated } from "../services/apiData";

export function useTopRated() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["top-rated"],
    queryFn: getTopRated,
  });

  return { topRatedData: data?.results, isLoading, error };
}
