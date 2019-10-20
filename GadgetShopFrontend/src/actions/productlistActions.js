import axios from "axios";
import {
  GET_ERRORS,
  GET_PRODUCTLIST,
  GET_PRODUCT,
  DELETE_PRODUCT
} from "../actions/types";

export const addProduct = (
  productlist_id,
  product,
  history
) => async dispatch => {
  try {
    await axios.post(`/productlist/${productlist_id}`, product);
    history.push(`/productsBoard/${productlist_id}`);
    //if everything is ok we can clean the errors
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getProductList = productlist_id => async dispatch => {
  try {
    const res = await axios.get(`/productlist/${productlist_id}`);
    dispatch({
      type: GET_PRODUCTLIST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getProduct = (
  productlist_id,
  pl_id,
  history
) => async dispatch => {
  try {
    const res = await axios.get(`/productlist/${productlist_id}/${pl_id}`);
    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    });
  } catch (err) {
    //validation to prevent putting wrong ids
    //should call to dashboard
    history.push("/dashboard");
  }
};

export const updateProduct = (
  productlist_id,
  pl_id,
  updatedProduct,
  history
) => async dispatch => {
  try {
    await axios.patch(
      `/productlist/${productlist_id}/${pl_id}`,
      updatedProduct
    );
    history.push(`/productsBoard/${productlist_id}`);
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const deleteProduct = (productlist_id, pl_id) => async dispatch => {
  if (
    window.confirm(
      `Are you sure you want to delete this product? This action cannot be undone`
    )
  )
    await axios.delete(`/productlist/${productlist_id}/${pl_id}`);
  dispatch({
    type: DELETE_PRODUCT,
    //im going to use this id in the future
    payload: pl_id
  });
};
