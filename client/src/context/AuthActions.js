  export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
  });
  export const loginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    ...error.response.data,
  });
  
  //logout
  
  export const logout = () => ({
    type: "LOGOUT",
  });