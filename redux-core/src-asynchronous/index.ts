import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
} from "./actions/userActions";
import { getRequestV3 } from "./apiCall";
import store from "./store/store";
import { User } from "./types";

const URI = "https://jsonplaceholder.typicode.com/users";

/* function getRequest(uri: string): void {
  store.dispatch(fetchUserRequest());
  fetch(uri)
    .then((response) => response.json())
    .then((result) => store.dispatch(fetchUserSuccess(result)))
    .catch((error) => store.dispatch(fetchUserFailure(error.message)));
}

getRequest(URI); */
/* 
getRequestV2<User[]>(URI, {
  request: fetchUserRequest,
  success: fetchUserSuccess,
  failure: fetchUserFailure,
}); */

store.dispatch(
  getRequestV3<User[]>(URI, {
    request: fetchUserRequest,
    success: fetchUserSuccess,
    failure: fetchUserFailure,
  })
);
