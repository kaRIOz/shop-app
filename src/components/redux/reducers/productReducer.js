import { ActionTypes } from "../constans/action-types";

const initialState = {
  products: [],
  cart: [],
};

export const productReducer = (
  state = initialState.products,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
export const handleBudget = (state = initialState.cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id);

      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qy: x.qy + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qy: 1,
          },
        ];
      }
    case "MINITEM":
      const exist1 = state.find((x) => x.id === product.id);

      if (exist1) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qy: x.qy - 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qy: 1,
          },
        ];
      }
    default:
      return state;
  }
};
