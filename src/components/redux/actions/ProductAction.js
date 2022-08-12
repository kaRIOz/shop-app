import { ActionTypes } from "../constans/action-types";
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: products,
  };
};
export const setSingleProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const addItem = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};
