import React, { Component } from "react";
import CartProduct from "./CartProduct";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getShoppingCart } from "../../actions/shoppingCartActions";
import StripeCheckout from "react-stripe-checkout";
class CartProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipping: 0
    };
  }
  onShippingButtonClick(value) {
    this.setState({
      shipping: value
    });
  }
  componentDidMount() {
    this.props.getShoppingCart();
  }

  render() {
    var costOfProducts = 0;
    const { shoppingCart } = this.props.shoppingCart;
    const shoppingCartItem = shoppingCart.map(item => (
      <CartProduct key={item.id} item={item} />
    ));
    function handleToken(token, addresses) {
      console.log({ token, addresses });
    }
    shoppingCart.map(item => (costOfProducts += item.productPriceInCart));
    const renderProducts = () => {
      if (shoppingCartItem < 1) {
        return (
          <div className="alert alert-info text-center" role="alert">
            <p>Your cart is empty. Let's shopping</p>
          </div>
        );
      } else {
        return (
          <div>
            {shoppingCartItem}
            <div className="cart-right-container ">
              <div className=" add-box-shadow cart-price-checkout-container scale-divs-in-cart">
                <div className="">
                  <label className="cart-label-price">Cost:</label>
                  <div className="in-one-line-on-endings"></div>
                  <label className="someclass">{costOfProducts} Euro</label>
                </div>
                <div className="clear-both "></div>
                <div>
                  <label className="cart-label-price">Ship:</label>
                  <div className="in-one-line-on-endings"></div>
                  <label className="someclass">
                    {this.state.shipping} Euro
                  </label>
                </div>
                <div className="clear-both "></div>
                <div>
                  <label className="cart-label-price ">Total Cost:</label>
                  <div className="in-one-line-on-endings"></div>
                  <label className="someclass">
                    {costOfProducts + this.state.shipping} Euro
                  </label>
                </div>

                <hr></hr>

                <StripeCheckout
                  className="scale-button"
                  currency="EUR"
                  stripeKey="pk_test_L62B8bk6mZ53yvnBXxzvCZ6i00rZlLuij6"
                  token={handleToken}
                  billingAddress
                  shippingAddress
                  amount={(costOfProducts + this.state.shipping) * 100}
                />
              </div>

              <div className="btn-group-vertical btn-group-toggle cart-shipping-options scale-divs-in-cart">
                <label className="btn btn-secondary active text-left">
                  Choose shipping option
                </label>
                <label className="btn btn-secondary text-left">
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                    onClick={() => this.onShippingButtonClick(5)}
                  />
                  <label className="cart-label-price">DPD:</label>
                  <div className="in-one-line-on-endings"></div>
                  <label className="someclass">5 Euro</label>
                </label>
                <label className="btn btn-secondary text-left">
                  <input
                    type="radio"
                    name="options"
                    id="option2"
                    onClick={() => this.onShippingButtonClick(6)}
                  />
                  <label className="cart-label-price">DHL:</label>
                  <div className="in-one-line-on-endings"></div>
                  <label className="someclass">6 Euro</label>
                </label>
                <label className="btn btn-secondary text-left">
                  <input
                    type="radio"
                    name="options"
                    id="option3"
                    onClick={() => this.onShippingButtonClick(7)}
                  />
                  <label className="cart-label-price">Fedex:</label>
                  <div className="in-one-line-on-endings"></div>
                  <label className="someclass">7 Euro</label>
                </label>
                <label className="btn btn-secondary text-left">
                  <input
                    type="radio"
                    name="options"
                    id="option4"
                    onClick={() => this.onShippingButtonClick(8)}
                  />
                  <label className="cart-label-price">Amazon:</label>
                  <div className="in-one-line-on-endings"></div>
                  <label className="someclass">8 Euro</label>
                </label>
              </div>
            </div>
          </div>
        );
      }
    };
    let CartItems = renderProducts();
    return <div className="margin-bottom">{CartItems}</div>;
  }
}

CartProductList.propTypes = {
  getShoppingCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart
});

export default connect(mapStateToProps, { getShoppingCart })(CartProductList);
