import { useQuery } from "@tanstack/react-query";
import { getCredits } from "../services/apiData";

export function useGetCredits({ itemId, mediaType }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["credits", itemId],
    queryFn: () => getCredits({ itemId, mediaType }),
  });

  return { creditsData: data?.cast, isLoading, error };
}
