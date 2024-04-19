import { useQuery } from "@tanstack/react-query";
import { getTopRated } from "../services/apiData";

export function useTopRated(mediaType) {
  const { data, isLoading, error } = useQuery({
    queryKey: [`top-rated-${mediaType}`],
    queryFn: () => getTopRated(mediaType),
  });

  return { topRatedData: data?.results, isLoading, error };
}
