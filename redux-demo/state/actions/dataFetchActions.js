/* export function fetchUsers(URI) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_USERS_REQUEST" });
    try {
      const response = await fetch(URI);
      if (!response.ok) throw new Error("Error while fetching data");
      const users = await response.json();
      dispatch({ type: "FETCH_USERS_SUCCESS", payload: users });
    } catch (error) {
      dispatch({ type: "FETCH_USERS_FAILURE", payload: error.message });
    }
  };
} */


export const fetchUsersRequest = () => ({
  type: "FETCH_USERS_REQUEST",
});

export const fetchUsersSuccess = (users) => ({
  type: "FETCH_USERS_SUCCESS",
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: "FETCH_USERS_FAILURE",
  payload: error,
});
