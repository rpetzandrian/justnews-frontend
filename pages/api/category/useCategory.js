import useSWR from "swr"
import { globalGet } from "../../../libs/fetcher/fetcher"

export const useCategory = () => {
  const getCategory = () => globalGet({
    url: `${process.env.api_url}/category`
  })
  const { data: category, mutate: mutateCategory, error: errorCategory } = useSWR('get_category', getCategory, { refreshInterval: 5000 })

  const loadingCategory = !category && !errorCategory;

  return { category, mutateCategory, errorCategory, loadingCategory }
}