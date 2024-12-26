import { createGenericReducer, InitialStateType } from "../state-util/state_util";
import { User } from "../types";

const initialState: InitialStateType<User> = {
  loading: false,
  errorMessage: "",
  data: [],
};
export const userReducer = createGenericReducer<User>(initialState);
