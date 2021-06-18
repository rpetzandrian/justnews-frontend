import useSWR from "swr"
import { globalGet } from "../../../libs/fetcher/fetcher"

export const useComments = (postId) => {
  const getComment = () => globalGet({
    url: `${process.env.api_url}/comments/${postId}`
  })

  const { data, mutate, error } = useSWR(!postId ? null : 'get_comment', getComment, {})
  const loading = !data && !error

  return {
    comments: error ? [] : data,
    mutateComment: mutate,
    errComment: error,
    loadComment: loading
  }
}