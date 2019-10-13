import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreateCategoryButton extends Component {
  render() {
    return (
      //React.Fragment allowsa user not to use another div when we have some html like here
      <React.Fragment>
        <Link to="/addCategory" className="btn  btn-primary">
          Create new category
        </Link>
      </React.Fragment>
    );
  }
}

export default CreateCategoryButton;
