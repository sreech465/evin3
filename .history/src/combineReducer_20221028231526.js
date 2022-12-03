import { combineReducers } from "redux";
import { LoginReducer, processReducer, projectReducer } from "./Reducer";

export const singleReducer = combineReducers({
  LoginReducer: LoginReducer,
  ProjectReducer: projectReducer,
  ProcessReducer: processReducer,
});
