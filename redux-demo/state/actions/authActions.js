export const setLoginCredentials = (name, value) => {
  return {
    type: "SET_LOGIN_CREDENTIALS",
    payload: { name, value },
  };
};
