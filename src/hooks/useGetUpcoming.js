import { useQuery } from "@tanstack/react-query";
import { getUpcoming } from "../services/apiData";

export function useGetUpcoming() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["upcoming"],
    queryFn: getUpcoming,
  });

  return { upcomingData: data?.results, isLoading, error };
}
