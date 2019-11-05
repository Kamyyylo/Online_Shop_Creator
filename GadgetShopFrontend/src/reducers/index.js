import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import categoryReducer from "./categoryReducer";
import productlistReducer from "./productlistReducer";
import shoppingCartReducer from "./shoppingCartReducer";

export default combineReducers({
  errors: errorReducer,
  category: categoryReducer,
  productlist: productlistReducer,
  shoppingCart: shoppingCartReducer
});
