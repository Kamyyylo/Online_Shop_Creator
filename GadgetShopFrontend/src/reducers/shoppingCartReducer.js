import { GET_SHOPPING_CART, DELETE_PRODUCT_FROM_CART } from "../actions/types";

const initialState = {
  shoppingCart: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: action.payload
      };
    case DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          cartItem => cartItem.id !== action.payload
        )
      };
    default:
      return state;
  }
}
