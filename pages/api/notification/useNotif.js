import useSWR from "swr"
import { globalGet } from "../../../libs/fetcher/fetcher"

export const useNotif = (form) => {
  const getNotif = () => globalGet({
    url: `${process.env.api_url}/notif/${form?.userId}`,
  })

  const { data, mutate, error } = useSWR(!form?.userId ? null : 'get_Notif', getNotif, { refreshInterval: 3000 })
  const loadNotif = !data && !error

  return {
    notif: data,
    mutateNotif: mutate,
    errNotif: error,
    loadNotif
  }
}