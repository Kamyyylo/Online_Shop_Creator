import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteProductFromCart } from "../../actions/shoppingCartActions";
class CartProduct extends Component {
  onDeleteIconClick(id) {
    this.props.deleteProductFromCart(id);
  }
  render() {
    const { item } = this.props;
    return (
      <div className=" float-left cart-product-container add-box-shadow scale-divs-in-cart">
        <img
          className="float-left cart-product-photo"
          src={`/images/${item.productPhotoInCart}`}
          alt=""
        ></img>
        <div className="cart-product-credentials-container float-left">
          <p className="cart-product-name">{item.productNameInCart}</p>
          <p className="cart-product-price">
            {item.productPriceInCart} <i className="fa fa-euro"></i>
          </p>
        </div>

        <i
          className="scale-button fa fa-trash cart-icon-trash float-right"
          onClick={this.onDeleteIconClick.bind(this, item.id)}
        ></i>
      </div>
    );
  }
}
CartProduct.propTypes = {
  deleteProductFromCart: PropTypes.func.isRequired
};

export default connect(null, { deleteProductFromCart })(CartProduct);
