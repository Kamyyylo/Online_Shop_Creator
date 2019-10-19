import {
  GET_PRODUCTLIST,
  GET_PRODUCT,
  DELETE_PRODUCT
} from "../actions/types.js";

const initialState = {
  //list of products and one specific product
  products: [],
  product: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTLIST:
      return {
        ...state,
        products: action.payload
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    case DELETE_PRODUCT:
      return {
        ...state
        //todo
      };
    default:
      return state;
  }
}
