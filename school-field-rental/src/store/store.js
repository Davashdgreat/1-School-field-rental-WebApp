import { createStore, combineReducers } from "redux";
import authReducer from "./authSlice";
import fieldReducer from "./fieldSlice.js"; // Another example for managing fields

const rootReducer = combineReducers({
  auth: authReducer,
  fields: fieldReducer,
});

const store = createStore(rootReducer);

export default store;
