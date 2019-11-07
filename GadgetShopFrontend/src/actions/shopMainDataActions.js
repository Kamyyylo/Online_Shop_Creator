import axios from "axios";
import { GET_SHOP_MAIN_DATA, GET_ERRORS } from "./types";

export const getShopMainData = () => async dispatch => {
  const res = await axios.get("/shopMainData");
  dispatch({
    type: GET_SHOP_MAIN_DATA,
    payload: res.data
  });
};

export const updateShopMainData = (shopMainData, history) => async dispatch => {
  window.alert(
    "Remember to refresh the page after changing data!!! Without refreshing you will not be able to see updates"
  );
  try {
    await axios.post("/shopMainData", shopMainData);
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
