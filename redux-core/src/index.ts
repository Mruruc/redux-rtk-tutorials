// import { decrement, increment } from "./features/counterSlice";
import { fetchUser } from "./features/userSlice";
import store from "./store/store";

console.log("initial state: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState().users);
});

/* store.dispatch(increment());
store.dispatch(increment(10));
store.dispatch(decrement());
 */

store.dispatch(fetchUser());
unsubscribe();

