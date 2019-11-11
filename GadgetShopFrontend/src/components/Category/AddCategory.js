import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCategory } from "../../actions/categoryActions";
import classnames from "classnames";

class AddCategory extends Component {
  constructor() {
    super();
    //state is immutable. to put value you need to make new state
    this.state = {
      categoryName: "",
      categoryIdentifier: "",
      description: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //life cycle hooks
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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
    //errors will be assigned from current state to errors other way f.e : this.state.errors.categoryName
    const { errors } = this.state;
    return (
      <div className="register float-left col-md-9 d-inline-block">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Create new category</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.categoryName
                    })}
                    placeholder="Category Name"
                    name="categoryName"
                    value={this.state.categoryName}
                    onChange={this.onChange}
                  />
                  {errors.categoryName && (
                    <div className="invalid-feedback text-right">
                      {errors.categoryName}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.categoryIdentifier
                    })}
                    placeholder="Unique Category ID"
                    name="categoryIdentifier"
                    value={this.state.categoryIdentifier}
                    onChange={this.onChange}
                  />
                  {errors.categoryIdentifier && (
                    <div className="invalid-feedback text-right">
                      {errors.categoryIdentifier}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.description
                    })}
                    placeholder="Category Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.description && (
                    <div className="invalid-feedback text-right">
                      {errors.description}
                    </div>
                  )}
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
  createCategory: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default connect(
  null,
  { createCategory }
)(AddCategory);
