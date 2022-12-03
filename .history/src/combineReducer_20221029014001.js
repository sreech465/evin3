import { combineReducers } from "redux";
import {
  equipmentReducer,
  equipmentReducer1,
  LoginReducer,
  processReducer,
  projectReducer,
} from "./Reducer";

export const singleReducer = combineReducers({
  LoginReducer: LoginReducer,
  ProjectReducer: projectReducer,
  ProcessReducer: processReducer,
  EquipmentReducer: equipmentReducer,
  EquipmentReducer1: equipmentReducer1,
});
