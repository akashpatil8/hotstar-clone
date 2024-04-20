import { useQuery } from "@tanstack/react-query";
import { getDetails } from "../services/apiData";

export function useGetDetails({ itemId, mediaType }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["details", itemId],
    queryFn: () => getDetails({ itemId, mediaType }),
  });

  return { data, isLoading, error };
}
