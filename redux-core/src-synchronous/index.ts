/* const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
}); */

import { getUserAction, userAction } from "./actions";
import { callMiddleWare2 } from "./middleWare";

// store.dispatch(counterAction(ActionType.INCREMENT, 5));
/* store.dispatch(counterAction(ActionType.INCREMENT));
store.dispatch({ type: ActionType.DECREMENT, payload: 2 });
 */

/* const user:User = {
  username: "john_doe@gmail.com",
  password: "",
};

store.dispatch(userAction(user));

user.password = "password2121";
store.dispatch(userAction(user));

// unsubscribe();
console.log("===================");

console.log("Current Store: ", store.getState()); */

// const user = store.dispatch();

// callMiddleWare();

// console.log(store.getState().getUser);

//const some = callMiddleWare2();
