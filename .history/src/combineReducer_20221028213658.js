import { combineReducers } from "redux";
import { LoginReducer } from "./Reducer";

export const singleReducer = combineReducers({
  LoginReducer: LoginReducer,
});
