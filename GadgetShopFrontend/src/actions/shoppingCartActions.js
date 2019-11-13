import axios from "axios";
import {
  GET_SHOPPING_CART,
  GET_SHIPPING_OPTIONS,
  DELETE_PRODUCT_FROM_CART
} from "./types";

export const getShoppingCart = () => async dispatch => {
  const res = await axios.get("/shoppingCart");
  dispatch({
    type: GET_SHOPPING_CART,
    payload: res.data
  });
};
export const getShippingOptions = () => async dispatch => {
  const res = await axios.get("/shippingCost");
  dispatch({
    type: GET_SHIPPING_OPTIONS,
    payload: res.data
  });
};
export const deleteProductFromCart = id => async dispatch => {
  await axios.delete(`/shoppingCart/${id}`);
  dispatch({
    type: DELETE_PRODUCT_FROM_CART,
    payload: id
  });
};
export const addToShoppingCart = id => async dispatch => {
  const emptyjson = {};
  await axios.post(`/shoppingCart/${id}`, emptyjson);
};
