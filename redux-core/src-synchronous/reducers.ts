import { produce } from "immer";
import {
  ActionType,
  CounterActionType,
  GET_USER,
  getUserActionType,
  SET_USER,
  User,
  userActionType,
} from "./actions";

export type InitialState = {
  counter: number;
};

const initialState: InitialState = {
  counter: 0,
};

export const counterReducer = (
  state: InitialState = initialState,
  action: CounterActionType
) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case ActionType.DECREMENT:
      return {
        ...state,
        counter: state.counter - action.payload,
      };

    default:
      return state;
  }
};

export const initialUserState: User = {
  username: "",
  password: "",
};

/* export const userReducer = (
  state = initialUserState,
  action: userActionType
) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}; */

export const userReducer = (
  state = initialUserState,
  action: userActionType | getUserActionType
) => {
  switch (action.type) {
    case SET_USER:
      return produce(state, (draft) => {
        draft.username = action.payload.username;
        draft.password = action.payload.password;
      });

    default:
      return state;
  }
};

export type GetUser = {
  isLoading: boolean;
  isError: string | boolean;
  user: User;
};

const getUserInitialState: GetUser = {
  isLoading: true,
  isError: false,
  user: {},
};

export const getUserReducer = (
  state = getUserInitialState,
  action: getUserActionType
) => {
  switch (action.type) {
    case GET_USER:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.isError = action.payload.isError;
        draft.user = action.payload.user;
      });
    default:
      return state;
  }
};
