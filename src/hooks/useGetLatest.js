import { useQuery } from "@tanstack/react-query";
import { getLatest } from "../services/apiData";

export function useGetLatest() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["latest"],
    queryFn: getLatest,
  });

  return { latestData: data?.results, isLoading, error };
}
