import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { Action } from "./state-util/state_util";
import store, { RootState } from "./store/store";

interface ActionCreators<T> {
  request: () => Action;
  success: (data: T) => Action;
  failure: (errorMessage: string) => Action;
}

export function getRequestV2<T>(
  uri: string,
  actionCreators: ActionCreators<T>
): void {
  store.dispatch(actionCreators.request());
  fetch(uri)
    .then((response) => response.json())
    .then((result) => store.dispatch(actionCreators.success(result)))
    .catch((error) => store.dispatch(actionCreators.failure(error.message)));
}

export function getRequestV3<T>(
  uri: string,
  actionCreators: ActionCreators<T>
): ThunkAction<void, RootState, unknown, AnyAction> {
  return async (dispatch) => {
    dispatch(actionCreators.request);
    fetch(uri)
      .then((response) => response.json())
      .then((result) => dispatch(actionCreators.success(result)))
      .catch((error) => dispatch(actionCreators.failure(error.message)));
  };
}
