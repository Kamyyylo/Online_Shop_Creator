import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCategory } from "../../actions/categoryActions";

class AddCategory extends Component {
  constructor() {
    super();
    //state is immutable. to put value you need to make new state
    this.state = {
      categoryName: "",
      categoryIdentifier: "",
      description: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    //put props from form to new state
    const newCategory = {
      categoryName: this.state.categoryName,
      categoryIdentifier: this.state.categoryIdentifier,
      description: this.state.description
    };
    //send new object to create uisng actions
    this.props.createCategory(newCategory, this.props.history);
  }
  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Create new category</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Category Name"
                    name="categoryName"
                    value={this.state.categoryName}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Unique Category ID"
                    name="categoryIdentifier"
                    value={this.state.categoryIdentifier}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Category Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  ></textarea>
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddCategory.propTypes = {
  createCategory: PropTypes.func.isRequired
};

export default connect(
  null,
  { createCategory }
)(AddCategory);
