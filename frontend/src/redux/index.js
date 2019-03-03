import { combineReducers } from "redux";
import measurementsReducer from "./measurements";
import productsReducer from "./products";

export default combineReducers({
  measurements: measurementsReducer,
  products: productsReducer
});
