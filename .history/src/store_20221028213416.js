import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { singleReducer } from "./combineReducer";

const store = createStore(singleReducer, applyMiddleware(thunk));

export default store;
