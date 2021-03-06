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

    const { user } = this.props.security;
    const userIsAdmin = (
      <React.Fragment>
        <button
          className="btn btn-danger float-right float-right button-category"
          onClick={this.onDeleteClick.bind(this, category.categoryIdentifier)}
        >
          <i className="fa fa-trash"></i>
        </button>
        <Link
          onClick={this.onUpdateClick.bind(
            this,
            category.categoryIdentifier,
            this.props.history
          )}
          to={`/updateCategory/${category.categoryIdentifier}`}
        >
          <button className="btn btn-warning float-right">
            <i className="fa fa-wrench"></i>
          </button>
        </Link>
      </React.Fragment>
    );
    const userIsNotAdmin = (
      <React.Fragment>
        <i className="fa fa-arrow-circle-right category-arrow-icon"></i>
      </React.Fragment>
    );
    let adminButtons;
    if (user.admin) {
      adminButtons = userIsAdmin;
    } else {
      adminButtons = userIsNotAdmin;
    }
    return (
      <div className="clearfix scale-button margin-bottom-category">
        <Link
          onClick={this.onCategoryNameClick.bind(
            this,
            category.categoryIdentifier
          )}
          to={`/productsBoard/${category.categoryIdentifier}`}
          className="nav-link active float-left category-link-deco category-text"
        >
          <i className="button-left-product fa fa-toggle-right category-icon "></i>
          {category.categoryName}
        </Link>
        {adminButtons}
      </div>
    );
  }
}

CategoryItem.propTypes = {
  deleteCategory: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  security: state.security
});
export default connect(mapStateToProps, {
  deleteCategory,
  getCategory,
  getProductList
})(CategoryItem);
