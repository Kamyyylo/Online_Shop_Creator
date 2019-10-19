import React, { Component } from "react";
import Product from "./Products/Product";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProductList } from "../../actions/productlistActions";
import { Link } from "react-router-dom";
class ProductsBoard extends Component {
  //constructor to handle errors
  constructor() {
    super();
    this.state = {
      errors: {}
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProductList(id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  render() {
    const { id } = this.props.match.params;
    //REMEMEBR name in brackets has to be the same as the name in props
    const { products } = this.props.productList;
    const { errors } = this.props;
    let BoardContent;
    const productItem = products.map(product => (
      <Product key={product.id} product={product} id={id} />
    ));
    const boardAlgorithm = (errors, productItem) => {
      if (productItem < 1) {
        if (errors.categoryNotFound) {
          return (
            <div className="alert alert-danger text-center" role="alert">
              {errors.categoryNotFound}
            </div>
          );
        } else {
          return (
            <div className="alert alert-info text-center" role="alert">
              <p>No Products on this board</p>
              <Link className="btn btn-success" to={`/addProduct/${id}`}>
                Add new product
              </Link>
            </div>
          );
        }
      } else {
        return <div>{productItem}</div>;
      }
    };
    BoardContent = boardAlgorithm(errors, productItem);
    return (
      <div className="col-md-9 register float-left d-inline-block">
        <div>{BoardContent}</div>
      </div>
    );
  }
}

ProductsBoard.propTypes = {
  productList: PropTypes.object.isRequired,
  getProductList: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  productList: state.productlist,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getProductList }
)(ProductsBoard);
