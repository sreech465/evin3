import { combineReducers } from "redux";
import { LoginReducer, projectReducer } from "./Reducer";

export const singleReducer = combineReducers({
  LoginReducer: LoginReducer,
  ProjectReducer: projectReducer,
});
