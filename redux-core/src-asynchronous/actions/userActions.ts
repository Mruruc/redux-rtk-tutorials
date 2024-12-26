import { ActionType, createAction } from "../state-util/state_util";
import { User } from "../types";

export const fetchUserRequest = () => createAction(ActionType.REQUEST);

export const fetchUserSuccess = (users: User[]) =>
  createAction<User[]>(ActionType.SUCCESS, users);

export const fetchUserFailure = (errorMessage: string) =>
  createAction(ActionType.FAILURE, errorMessage);
