import useSWR from "swr"
import { globalGet } from "../../../libs/fetcher/fetcher"

export const useUser = (form) => {
  const getUser = () => {
    return globalGet({
      url: `${process.env.api_url}/users/${form?.id}`,
      headers: {
        'user-token': `Bearer ${form?.token}`
      }
    })
  }

  const { data, mutate, error } = useSWR(!form?.id && !form?.token ? null : 'get_user', getUser)
  const loadingUser = !error && !data
  console.log(data)

  return {
    data,
    mutateUser: mutate,
    loadingUser,
    errorUser: error
  }

}