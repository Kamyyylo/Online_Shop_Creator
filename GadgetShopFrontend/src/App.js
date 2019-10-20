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

//url with parameters needs to be separated routed if we want many url to one component
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/updateCategory/:id" component={Dashboard} />
          <Route exact path="/productsBoard/:id" component={Dashboard} />
          <Route exact path="/addProduct/:id" component={Dashboard} />
          <Route
            exact
            path="/updateProduct/:productlist_id/:pl_id"
            component={Dashboard}
          />
          <Route
            exact
            path="/moreInfo/:productlist_id/:pl_id"
            component={Dashboard}
          />
          <Route exact path="/addCategory" component={Dashboard} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addCategory" component={AddCategory} />
          <Route exact path="/updateCategory/:id" component={UpdateCategory} />
          <Route exact path="/productsBoard/:id" component={ProductsBoard} />
          <Route exact path="/addProduct/:id" component={AddProduct} />
          <Route
            exact
            path="/moreInfo/:productlist_id/:pl_id"
            component={MoreInfoProduct}
          />
          <Route
            exact
            path="/updateProduct/:productlist_id/:pl_id"
            component={UpdateProduct}
          />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
