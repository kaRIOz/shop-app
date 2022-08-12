import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  handleBudget,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  handleBudget,
});

export default reducers;
