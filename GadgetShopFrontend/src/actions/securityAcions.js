import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";

export const createNewUser = (user, history) => async dispatch => {
  try {
    await axios.post("/users/register", user);
    history.push("/login");
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

export const login = LoginRequest => async dispatch => {
  try {
    //post -> login request
    const res = await axios.post("/users/login", LoginRequest);
    //extract token
    const { token } = res.data;
    //store the token in the local storage
    localStorage.setItem("jwtToken", token);
    //set token in the header
    setJWTToken(token);
    //decode token on react jwt-decode
    const decoded = jwt_decode(token);
    //disaptch to security reducer
    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const logout = () => dispatch => {
  //delete token from local storage
  localStorage.removeItem("jwtToken");
  //set header to false
  setJWTToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};
