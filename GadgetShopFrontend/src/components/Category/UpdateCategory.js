import React, { Component } from "react";
import { getCategory, createCategory } from "../../actions/categoryActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class UpdateCategory extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      categoryName: "",
      categoryIdentifier: "",
      description: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getCategory(id, this.props.history);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const updateCategory = {
      id: this.state.id,
      categoryName: this.state.categoryName,
      categoryIdentifier: this.state.categoryIdentifier,
      description: this.state.description
    };
    this.props.createCategory(updateCategory, this.props.history);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    //he gets the values from props.category
    const {
      id,
      categoryName,
      categoryIdentifier,
      description
    } = nextProps.category;
    //values taken from props are being set to update forms
    this.setState({
      id,
      categoryName,
      categoryIdentifier,
      description
    });
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="register float-left col-md-9 d-inline-block">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Edit category</h5>
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
                    className="form-control form-control-lg"
                    placeholder="Unique Category ID"
                    value={this.state.categoryIdentifier}
                    disabled
                  />
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
UpdateCategory.propTypes = {
  getCategory: PropTypes.func.isRequired,
  createCategory: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  category: state.category.category,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { getCategory, createCategory }
)(UpdateCategory);
