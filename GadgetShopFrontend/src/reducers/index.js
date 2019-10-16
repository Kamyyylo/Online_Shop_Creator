import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import categoryReducer from "./categoryReducer";

export default combineReducers({
  errors: errorReducer,
  category: categoryReducer
});
