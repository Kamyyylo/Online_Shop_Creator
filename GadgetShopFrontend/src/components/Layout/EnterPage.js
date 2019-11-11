import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EnterPage extends Component {
  render() {
    return (
      <div>
        <p className="enter-page-header-text">Welcome to my store!</p>
        <p className="enter-page-login-register-message">
          Before you start shopping, let's log in or create new account
        </p>
        <Link className="btn btn-primary enter-page-buttons" to="/login">
          Log in
        </Link>
        <Link className="btn btn-primary enter-page-buttons" to="/register">
          Sign Up
        </Link>
      </div>
    );
  }
}
