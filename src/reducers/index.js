import inputReducer from "./input";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  inputReducer,
});

export default allReducers;
