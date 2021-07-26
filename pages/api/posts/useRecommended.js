import useSWR from "swr";
import { globalGet } from "../../../libs/fetcher/fetcher";

export const useRecommended = (userId, initialData) => {
  const getrecommended = () => globalGet({
    url: `${process.env.api_url}/posts?user_id=${userId}&recommended=true`,
  })

  const { data, mutate, error } = useSWR(userId ? 'get_recommended' : null, getrecommended, { initialData, revalidateOnMount: true, refreshInterval: 2000 })

  const loadingRecommended = !data && !error;

  return {
    recommended: data,
    loadingRecommended,
    mutateRecommended: mutate,
    errorRecommended: error
  }

}