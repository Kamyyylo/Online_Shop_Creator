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
      <div className=" float-left cart-product-container add-box-shadow">
        <img
          className="float-left cart-product-photo"
          src={`/images/${item.productPhotoInCart}`}
          alt=""
        ></img>
        <div className="cart-product-credentials-container float-left">
          <p className="cart-product-name">{item.productNameInCart}</p>
          <p className="cart-product-price">{item.productPriceInCart} Euro</p>
        </div>
        <p
          className="icon-trash cart-icon-trash text-right"
          onClick={this.onDeleteIconClick.bind(this, item.id)}
        ></p>
      </div>
    );
  }
}
CartProduct.propTypes = {
  deleteProductFromCart: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteProductFromCart }
)(CartProduct);