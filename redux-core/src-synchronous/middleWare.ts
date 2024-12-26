import { Dispatch } from "redux";
import { getUserAction, User } from "./actions";
import store from "./store";

export const callMiddleWare2 = () => {
  return (dispatch: Dispatch) => {
    fetchUser()
      .then((user) => {
        dispatch(
          getUserAction({
            isError: false,
            isLoading: false,
            user: user,
          })
        );
      })
      .catch((error) => {
        dispatch(
          getUserAction({
            isError: error.message,
            isLoading: false,
            user: {},
          })
        );
      });
  };
};

export function callMiddleWare() {
  fetchUser()
    .then((user) => {
      store.dispatch(
        getUserAction({
          isError: false,
          isLoading: false,
          user: user,
        })
      );
    })
    .catch((error) => {
      store.dispatch(getUserAction(error));
    });
}

export function fetchUser(): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 11212,
        username: "john_doe@doe.com",
        password: "john_password",
      });
    }, 1000);
  });
}
