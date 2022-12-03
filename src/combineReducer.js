import { combineReducers } from "redux";
import {
  equipmentReducer,
  equipmentReducer1,
  LoginReducer,
  processReducer,
  processReducer1,
  projectReducer,
} from "./Reducer";

export const singleReducer = combineReducers({
  LoginReducer: LoginReducer,
  ProjectReducer: projectReducer,
  ProcessReducer: processReducer,
  ProcessReducer1: processReducer1,
  EquipmentReducer: equipmentReducer,
  EquipmentReducer1: equipmentReducer1,
});
