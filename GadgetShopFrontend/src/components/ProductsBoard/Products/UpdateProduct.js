import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import { getProduct, updateProduct } from "../../../actions/productlistActions";
import PropTypes from "prop-types";
class UpdateProduct extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      categorySequence: "",
      productName: "",
      productPhoto: "",
      productPrice: "",
      productDescription: "",
      productShortDescription: "",
      categoryIdentifier: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    const { productlist_id, pl_id } = this.props.match.params;
    this.props.getProduct(productlist_id, pl_id, this.props.history);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const {
      id,
      categorySequence,
      productName,
      productPhoto,
      productPrice,
      productShortDescription,
      productDescription,
      categoryIdentifier
    } = nextProps.product;
    this.setState({
      id,
      categorySequence,
      productName,
      productPhoto,
      productPrice,
      productShortDescription,
      productDescription,
      categoryIdentifier
    });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const updatedProduct = {
      id: this.state.id,
      categorySequence: this.state.categorySequence,
      productName: this.state.productName,
      productPhoto: this.state.productPhoto,
      productPrice: this.state.productPrice,
      productShortDescription: this.state.productShortDescription,
      productDescription: this.state.productDescription,
      categoryIdentifier: this.state.categoryIdentifier
    };

    this.props.updateProduct(
      this.state.categoryIdentifier,
      this.state.categorySequence,
      updatedProduct,
      this.props.history
    );
  }
  render() {
    const { id } = this.props.match.params;
    const { errors } = this.state;
    return (
      <div className="add-PBI">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h4 className="display-4 text-center">Edit Product</h4>
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

UpdateProduct.propTypes = {
  getProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.productlist.product,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getProduct, updateProduct }
)(UpdateProduct);
