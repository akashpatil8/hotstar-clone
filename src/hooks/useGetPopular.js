import { useQuery } from "@tanstack/react-query";
import { getPopular } from "../services/apiData";

export function useGetPopular() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["popular"],
    queryFn: getPopular,
  });

  return { popularData: data?.results, isLoading, error };
}
