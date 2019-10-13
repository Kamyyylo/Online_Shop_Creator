import axios from "axios";
import { GET_ERRORS } from "../actions/types";

//history pushes as to dashboard if we add category
export const createCategory = (category, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/category", category);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
