import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCategory, getCategory } from "../../actions/categoryActions";
import { getProductList } from "../../actions/productlistActions";
class CategoryItem extends Component {
  onDeleteClick = id => {
    this.props.deleteCategory(id);
  };
  onUpdateClick = (id, history) => {
    this.props.getCategory(id, history);
  };
  onCategoryNameClick = id => {
    this.props.getProductList(id);
  };
  render() {
    const { category } = this.props;
    return (
      <div className="clearfix">
        <Link
          onClick={this.onCategoryNameClick.bind(
            this,
            category.categoryIdentifier
          )}
          to={`/productsBoard/${category.categoryIdentifier}`}
          className="nav-link active float-left"
        >
          {category.categoryName}
        </Link>
        <p
          className="icon-trash float-right trash-icon"
          onClick={this.onDeleteClick.bind(this, category.categoryIdentifier)} //we take it from the props above
        />

        <Link
          onClick={this.onUpdateClick.bind(
            this,
            category.categoryIdentifier,
            this.props.history
          )}
          to={`/updateCategory/${category.categoryIdentifier}`}
          className="update-icon icon-wrench float-right"
        />
      </div>
    );
  }
}

CategoryItem.propTypes = {
  deleteCategory: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteCategory, getCategory, getProductList }
)(CategoryItem);
