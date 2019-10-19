import React, { Component } from "react";
import { Link } from "react-router-dom";
class Product extends Component {
  render() {
    const { product } = this.props;
    const { id } = this.props;
    var imageName = product.productPhoto;
    return (
      <div className="clearfix float-left product-list-container">
        <div className="add-box-shadow clearfix px-2 my-1">
          <div className=" photo-container float-left">
            <Link to="#">
              <img src={require(`../../../images/${imageName}`)} alt="" />
            </Link>
          </div>
          <div className=" float-left">
            <p className="product-name">{product.productName}</p>
            <p className="product-price">{product.productPrice} Euro</p>
            <p className="more-info">
              <Link className=" btn btn-warning" to="#">
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
          <div className=" clearfix float-right diplay-block-class">
            <Link
              className="icon-plus-circle add-icon"
              to={`/addProduct/${id}`}
            />
            <Link
              to={`/updateProduct/${product.categoryIdentifier}/${product.categorySequence}`}
              className="icon-wrench update-icon diplay-block-class"
            />
            <Link to="" className="icon-trash  trash-icon diplay-block-class" />
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
