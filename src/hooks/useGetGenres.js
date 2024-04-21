import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../services/apiData";

export function useGetGenres(mediaType) {
  const { data, isLoading, error } = useQuery({
    queryKey: [`genres-${mediaType}`],
    queryFn: () => getGenres({ mediaType }),
  });

  return { gernesData: data?.genres, isLoading, error };
}
