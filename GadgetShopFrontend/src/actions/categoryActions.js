import axios from "axios";
import {
  GET_ERRORS,
  GET_CATEGORIES,
  GET_CATEGORY,
  DELETE_CATEGORY
} from "../actions/types";

//history pushes as to dashboard if we add category
export const createCategory = (category, history) => async dispatch => {
  try {
    await axios.post("/category", category);
    history.push("/dashboard");
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

export const getCategories = () => async dispatch => {
  const res = await axios.get("/category/all");
  dispatch({
    type: GET_CATEGORIES,
    //this payload is being load to the reducer
    payload: res.data
  });
};

export const getCategory = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`/category/${id}`);
    dispatch({
      type: GET_CATEGORY,
      payload: res.data
    });
  } catch (error) {
    history.push("/dashboard");
  }
};

export const deleteCategory = id => async dispatch => {
  if (
    window.confirm(
      "Are you sure you want to delete the whole category and all products that belongs to it ?"
    )
  ) {
    await axios.delete(`/category/${id}`);
    dispatch({
      type: DELETE_CATEGORY,
      payload: id
    });
  }
};
