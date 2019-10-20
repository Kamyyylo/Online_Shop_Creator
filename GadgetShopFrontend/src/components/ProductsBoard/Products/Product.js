import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../../actions/productlistActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Product extends Component {
  onDeleteClick(productlist_id, pl_id) {
    this.props.deleteProduct(productlist_id, pl_id);
  }

  render() {
    const { product } = this.props;
    const { id } = this.props;

    return (
      <div className="clearfix float-left product-list-container">
        <div className="add-box-shadow clearfix px-2 my-1">
          <div className=" photo-container float-left">
            <Link
              to={`/moreInfo/${product.categoryIdentifier}/${product.categorySequence}`}
            >
              <img src={`/images/${product.productPhoto}`} alt="" />
            </Link>
          </div>
          <div className=" float-left">
            <p className="product-name">{product.productName}</p>
            <p className="product-price">{product.productPrice} Euro</p>
            <p className="more-info">
              <Link
                className=" btn btn-warning"
                to={`/moreInfo/${product.categoryIdentifier}/${product.categorySequence}`}
              >
                more Info
              </Link>
            </p>
            <p className="add-to-cart">
              <Link className=" btn btn-danger" to="#">
                add to cart
              </Link>
            </p>
          </div>
          <div>
            <p className="product-short-description">
              {product.productShortDescription}
            </p>
          </div>
          <div className=" clearfix float-right display-inline-class ">
            <Link
              className="icon-plus-circle add-icon display-block-class"
              to={`/addProduct/${id}`}
            />
            <Link
              to={`/updateProduct/${product.categoryIdentifier}/${product.categorySequence}`}
              className="icon-wrench update-icon display-block-class"
            />
            <p
              onClick={this.onDeleteClick.bind(
                this,
                product.categoryIdentifier,
                product.categorySequence
              )}
              className="icon-trash  trash-icon display-block-class"
            />
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  deleteProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteProduct }
)(Product);
