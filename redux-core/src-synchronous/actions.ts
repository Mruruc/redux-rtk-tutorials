import { GetUser } from "./reducers";

export enum ActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export interface CounterActionType {
  type: ActionType;
  payload: number;
}

export const counterAction = (
  actionType: ActionType,
  payload: number = 1
): CounterActionType => {
  return {
    type: actionType,
    payload: payload,
  };
};

export const SET_USER = "SET_USER";
export interface User {
  readonly id?: number;
  username?: string;
  password?: string; 
}

export type userActionType = {
  type: typeof SET_USER;
  payload: User;
};

export const userAction = (user: User): userActionType => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const GET_USER = "GET_USER";

export type getUserActionType = {
  type: typeof GET_USER;
  payload: GetUser;
};

export const getUserAction = (payload: GetUser): getUserActionType => {
  return {
    type: GET_USER,
    payload: payload,
  };
};
