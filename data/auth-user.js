import useSWR from "swr";

import Login from "../libs/fetcher/auth";

export default function useUser() {
  const { data, mutate, error } = useSWR('auth_login', Login);

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
}