import { produce } from "immer";

// actions util
export enum ActionType {
  REQUEST = "REQUEST",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
}

export interface Action<T = any> {
  type: string;
  payload?: T;
}

export const createAction = <T = any>( type: ActionType,payload?: T): Action<T> => ({
  type: type,
  payload,
});

// reducer util

export interface InitialStateType<T = any> {
  loading: boolean;
  errorMessage: string;
  data: T[];
}

export const createGenericReducer =
  <T>(initialState: InitialStateType<T>) =>
  (state = initialState, action: Action): InitialStateType<T> => {
    switch (action.type) {
      case ActionType.REQUEST:
        return produce(state, (draft) => {
          draft.loading = true;
          draft.errorMessage = "";
        });

      case ActionType.SUCCESS:
        return produce(state, (draft) => {
          draft.loading = false;
          draft.data = action.payload;
        });

      case ActionType.FAILURE:
        return produce(state, (draft) => {
          draft.loading = false;
          draft.errorMessage = action.payload;
        });

      default:
        return state;
    }
  };
