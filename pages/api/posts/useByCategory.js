import useSWR from "swr"
import { globalGet } from "../../../libs/fetcher/fetcher"

export const useByCategory = (userId, initialData) => {
  const getPosts = () => globalGet({
    url: `${process.env.api_url}/posts/category?user_id=${userId}`,
  })

  const { data, mutate, error } = useSWR(userId ? 'get_by_category' : null, getPosts, { initialData: initialData, refreshInterval: 2000 })
  const loadingPost = !data && !error;

  return {
    postByCategory: data,
    loadingPost,
    mutateByCategory: mutate,
    errorpostByCategory: error
  }

}