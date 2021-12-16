import { combineReducers } from "redux";
import CalculatorReducer from "./CalculatorReducer";

export default combineReducers({
  counter: CalculatorReducer,
});
