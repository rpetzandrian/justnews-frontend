export default () => {
  if (localStorage.getItem('token')) {
    // authorized
    return {
      isLogin: true,
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