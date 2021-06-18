import useSWR from "swr"
import { globalGet } from "../../../libs/fetcher/fetcher"

export const useLatest = (userId, initialData) => {
  const getlatest = () => globalGet({
    url: `${process.env.api_url}/posts?user_id=${userId}&time=desc`,
  })


  const { data, mutate, error } = useSWR(userId ? 'get_latest' : null, getlatest, { initialData, revalidateOnMount: true })
  console.log(data, 'dataaa')
  const loadingLatest = !data && !error;

  return {
    latest: data,
    loadingLatest,
    mutateLatest: mutate,
    errorLatest: error
  }

}