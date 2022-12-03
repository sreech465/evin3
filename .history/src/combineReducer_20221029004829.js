import { combineReducers } from "redux";
import {
  equipmentReducer,
  LoginReducer,
  processReducer,
  projectReducer,
} from "./Reducer";

export const singleReducer = combineReducers({
  LoginReducer: LoginReducer,
  ProjectReducer: projectReducer,
  ProcessReducer: processReducer,
  EquipmentReducer: equipmentReducer,
});
