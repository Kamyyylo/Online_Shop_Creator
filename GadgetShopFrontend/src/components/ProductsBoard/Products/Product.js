import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../../actions/productlistActions";
import { addToShoppingCart } from "../../../actions/shoppingCartActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Popup } from "semantic-ui-react";

class Product extends Component {
  onDeleteClick(productlist_id, pl_id) {
    this.props.deleteProduct(productlist_id, pl_id);
  }
  onAddToCartClick(id) {
    this.props.addToShoppingCart(id);
  }

  render() {
    const { product } = this.props;
    const { id } = this.props;
    const { user } = this.props.security;
    const userIsAdmin = (
      <React.Fragment>
        <div className=" clearfix float-right display-inline-class ">
          <Link className=" display-block-class" to={`/addProduct/${id}`}>
            <button className="btn btn-success scale-button button-right-product">
              <i className="fa fa-plus-circle"></i>
            </button>
          </Link>

          <Link
            to={`/updateProduct/${product.categoryIdentifier}/${product.categorySequence}`}
            className=" display-block-class"
          >
            <button className="btn btn-warning scale-button button-right-product">
              <i className="fa fa-wrench"></i>
            </button>
          </Link>

          <button
            className="btn btn-danger display-block-class scale-button"
            onClick={this.onDeleteClick.bind(
              this,
              product.categoryIdentifier,
              product.categorySequence
            )}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </React.Fragment>
    );
    let adminButtons;
    if (user.admin) {
      adminButtons = userIsAdmin;
    }
    return (
      <div className="clearfix float-left product-list-container scale-product add-border-radius">
        <div className="add-box-shadow clearfix px-2 my-1 ">
          <div className=" photo-container float-left">
            <Link
              to={`/moreInfo/${product.categoryIdentifier}/${product.categorySequence}`}
            >
              <img
                className="scale-thing"
                src={`/images/${product.productPhoto}`}
                alt=""
              />
            </Link>
          </div>
          <div className="float-left">
            <p className="product-name">{product.productName}</p>
            <p className="product-price">
              {product.productPrice} <i className="fa fa-euro"></i>
            </p>
            <p className="more-info">
              <Popup
                content="Click to get more info about this product"
                className="cart-popup"
                position="right center"
                trigger={
                  <Link
                    className=" btn btn-warning scale-button"
                    to={`/moreInfo/${product.categoryIdentifier}/${product.categorySequence}`}
                  >
                    <i className="fa fa-info-circle button-left-product"></i>
                    more Info
                  </Link>
                }
              />
            </p>
            <div className="add-to-cart">
              <Popup
                content="Add product to your cart and continue shopping!"
                className="cart-popup"
                position="right center"
                trigger={
                  <p
                    className=" btn btn-danger scale-button"
                    onClick={this.onAddToCartClick.bind(
                      this,
                      product.categorySequence
                    )}
                  >
                    <i className="fa fa-cart-plus button-left-product"></i>add
                    to cart
                  </p>
                }
              />
            </div>
          </div>
          <div>
            <p className="product-short-description ">
              {product.productShortDescription}
            </p>
          </div>
          {adminButtons}
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  addToShoppingCart: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security
});

export default connect(mapStateToProps, { deleteProduct, addToShoppingCart })(
  Product
);
