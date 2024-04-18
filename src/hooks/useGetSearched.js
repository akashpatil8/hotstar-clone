import { useMutation, useQuery } from "@tanstack/react-query";
import { getSearched } from "../services/apiData";

export function useGetSearched() {
  const { mutate, isPending, data } = useMutation({
    mutationKey: ["searched"],
    mutationFn: getSearched,
  });

  return { mutate, isPending, searchedData: data?.results };
}
