import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import { addProduct } from "../../../actions/productlistActions";
import PropTypes from "prop-types";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    this.state = {
      productName: "",
      productPhoto: "",
      productPrice: "",
      productShortDescription: "",
      productDescription: "",
      categoryIdentifier: id,
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newProduct = {
      //dont need to pass category id because its passed from url
      productName: this.state.productName,
      productPhoto: this.state.productPhoto,
      productPrice: this.state.productPrice,
      productShortDescription: this.state.productShortDescription,
      productDescription: this.state.productDescription
    };
    this.props.addProduct(
      this.state.categoryIdentifier,
      newProduct,
      this.props.history
    );
  }
  //if component receive props
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  render() {
    const { id } = this.props.match.params;
    const { errors } = this.state;
    return (
      <div className="add-PBI">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h4 className="display-4 text-center">Add New Product</h4>
              <br></br>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.productName
                    })}
                    placeholder="Product Name"
                    name="productName"
                    value={this.state.productName}
                    onChange={this.onChange}
                  />
                  {errors.productName && (
                    <div className="invalid-feedback text-right">
                      {errors.productName}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.productPhoto
                    })}
                    placeholder="Put here name of the image with proper extension f.e jpg, png"
                    name="productPhoto"
                    value={this.state.productPhoto}
                    onChange={this.onChange}
                  />
                  {errors.productPhoto && (
                    <div className="invalid-feedback text-right">
                      {errors.productPhoto}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.productPrice
                    })}
                    placeholder="Price of the product"
                    name="productPrice"
                    value={this.state.productPrice}
                    onChange={this.onChange}
                  />
                  {errors.productPrice && (
                    <div className="invalid-feedback text-right">
                      {errors.productPrice}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.productShortDescription
                    })}
                    placeholder="Short description of the product"
                    name="productShortDescription"
                    value={this.state.productShortDescription}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.productShortDescription && (
                    <div className="invalid-feedback text-right">
                      {errors.productShortDescription}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.productDescription
                    })}
                    placeholder="Description of the product"
                    name="productDescription"
                    value={this.state.productDescription}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.productDescription && (
                    <div className="invalid-feedback text-right">
                      {errors.productDescription}
                    </div>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
                <br></br>
                <Link
                  to={`/productsBoard/${id}`}
                  className="btn btn-primary float-left"
                >
                  Return to the list of products
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddProduct.propTypes = {
  addProduct: PropTypes.func.isRequired,
  //to have acces to the errors
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addProduct }
)(AddProduct);
