import { useQuery } from "@tanstack/react-query";
import { getPopular } from "../services/apiData";

export function useGetPopular(mediaType) {
  const { data, isLoading, error } = useQuery({
    queryKey: [`popular-${mediaType}`],
    queryFn: () => getPopular(mediaType),
  });

  return { popularData: data?.results, isLoading, error };
}
