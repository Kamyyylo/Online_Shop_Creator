import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/dashboard">Gadget Shop</Link>
        </h4>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="p-2 text-dark" to="">
            Cart
          </Link>
          <Link className="p-2 text-dark" to="">
            Name
          </Link>
        </nav>
        <Link className="btn btn-outline-primary" to="">
          Sign up
        </Link>
      </div>
    );
  }
}

export default Header;
