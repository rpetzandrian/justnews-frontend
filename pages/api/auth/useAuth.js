import useSWR from "swr";

export const useAuth = () => {
  const getUser = () => {
    if (localStorage.getItem('token')) {
      // authorized
      return {
        data: {
          id: localStorage.getItem('id'),
          token: localStorage.getItem('token'),
          role: localStorage.getItem('role'),
        }
      };
    }

    // not authorized
    const error = new Error("Not authorized!");
    error.status = 403;
    throw error;
  }

  const { data: auth, mutate: mutateAuth, error: errorAuth } = useSWR('auth_login', getUser);

  const loadingAuth = !auth && !errorAuth;
  const loggedOut = errorAuth && !auth

  return {
    loadingAuth,
    loggedOut,
    auth,
    mutateAuth,
  };
}