import useSWR from "swr";
import { globalGet } from "../../../libs/fetcher/fetcher";

export const useSavedPost = (userId) => {
  const getSavedPost = () => globalGet({
    url: `${process.env.api_url}/posts?user_id=${userId}&saved=true`,
  })

  const { data, mutate, error } = useSWR(userId ? 'get_saved_post' : null, getSavedPost, { revalidateOnMount: true, refreshInterval: 2000 })

  const loadingSavedPost = !data && !error;

  return {
    savedPost: data,
    loadingSavedPost,
    mutateSavedPost: mutate,
    errorSavedPost: error
  }

}