import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProduct } from "../../../actions/productlistActions";
import { addToShoppingCart } from "../../../actions/shoppingCartActions";
import { Link } from "react-router-dom";
import { Popup } from "semantic-ui-react";

class MoreInfoProduct extends Component {
  constructor(props) {
    super(props);
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
  }
  onAddToCartClick(id) {
    this.props.addToShoppingCart(id);
  }
  componentDidMount() {
    const { productlist_id, pl_id } = this.props.match.params;
    this.props.getProduct(productlist_id, pl_id, this.props.history);
  }
  componentWillReceiveProps(nextProps) {
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

  render() {
    const { product } = this.props;
    return (
      <div className="register float-left col-md-9 d-inline-block add-box-shadow ">
        <img
          className="d-block float-left more-info-image"
          src={`/images/${this.state.productPhoto}`}
          alt=""
        ></img>
        <div className="float-left d-block ">
          <p className="more-info-product-name">{this.state.productName}</p>

          <p className="more-info-product-price ">
            {this.state.productPrice} Euro
          </p>
          <div className="text-left ">
            <Popup
              content="Add product to your cart and continue shopping!"
              className="cart-popup"
              position="right center"
              trigger={
                <p
                  className=" btn btn-danger "
                  onClick={this.onAddToCartClick.bind(
                    this,
                    product.categorySequence
                  )}
                >
                  add to cart
                </p>
              }
            />
          </div>
          <p className="text-left float-left more-info-back-to-products-btn ">
            <Link
              className=" btn btn-primary  "
              to={`/productsBoard/${product.categoryIdentifier}`}
            >
              back to products
            </Link>
          </p>
        </div>
        <br></br>
        <br></br>
        <p className="more-info-product-description d-inline-block">
          {this.state.productDescription}
        </p>
      </div>
    );
  }
}

MoreInfoProduct.propTypes = {
  getProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  addToShoppingCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  product: state.productlist.product
});

export default connect(
  mapStateToProps,
  { getProduct, addToShoppingCart }
)(MoreInfoProduct);
