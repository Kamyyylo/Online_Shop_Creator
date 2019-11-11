import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fontello/css/fontello.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import AddCategory from "./components/Category/AddCategory";
import { Provider } from "react-redux";
import store from "./store";
import UpdateCategory from "./components/Category/UpdateCategory";
import ProductsBoard from "./components/ProductsBoard/ProductsBoard";
import AddProduct from "./components/ProductsBoard/Products/AddProduct";
import UpdateProduct from "./components/ProductsBoard/Products/UpdateProduct";
import MoreInfoProduct from "./components/ProductsBoard/Products/MoreInfoProduct";
import CartProductList from "./components/ShoppingCart/CartProductList";
import InfoImage from "./components/InfoImage";
import Footer from "./components/Layout/Footer";
import ChangeMainData from "./components/ChangeMainData/ChangeMainData";
import EnterPage from "./components/Layout/EnterPage";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityAcions";
import SecuredRoute from "./securityUtils/SecureRoute";

//tokent is being kept in local storage
const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });
  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

//url with parameters needs to be separated routed if we want many url to one component
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={EnterPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

          <SecuredRoute
            exact
            path="/updateCategory/:id"
            component={Dashboard}
          />
          <SecuredRoute exact path="/productsBoard/:id" component={Dashboard} />
          <SecuredRoute exact path="/addProduct/:id" component={Dashboard} />
          <SecuredRoute
            exact
            path="/updateProduct/:productlist_id/:pl_id"
            component={Dashboard}
          />
          <SecuredRoute
            exact
            path="/moreInfo/:productlist_id/:pl_id"
            component={Dashboard}
          />
          <SecuredRoute exact path="/addCategory" component={Dashboard} />
          <SecuredRoute exact path="/dashboard" component={Dashboard} />
          <SecuredRoute exact path="/dashboard" component={InfoImage} />
          <SecuredRoute exact path="/addCategory" component={AddCategory} />
          <SecuredRoute
            exact
            path="/shoppingCart"
            component={CartProductList}
          />
          <SecuredRoute
            exact
            path="/updateCategory/:id"
            component={UpdateCategory}
          />
          <SecuredRoute
            exact
            path="/productsBoard/:id"
            component={ProductsBoard}
          />
          <SecuredRoute exact path="/addProduct/:id" component={AddProduct} />
          <SecuredRoute
            exact
            path="/changeMainData"
            component={ChangeMainData}
          />
          <SecuredRoute
            exact
            path="/moreInfo/:productlist_id/:pl_id"
            component={MoreInfoProduct}
          />
          <SecuredRoute
            exact
            path="/updateProduct/:productlist_id/:pl_id"
            component={UpdateProduct}
          />

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
