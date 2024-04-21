import { useQuery } from "@tanstack/react-query";
import { getAiringTodayTV } from "../services/apiData";

export function useGetAiringTodayTV() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["airing-today-tv"],
    queryFn: getAiringTodayTV,
  });

  return { airingToadyTVData: data?.results, isLoading, error };
}
