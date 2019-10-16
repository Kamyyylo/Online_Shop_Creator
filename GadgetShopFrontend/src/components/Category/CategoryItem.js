import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCategory, getCategory } from "../../actions/categoryActions";

class CategoryItem extends Component {
  onDeleteClick = id => {
    this.props.deleteCategory(id);
  };
  onUpdateClick = (id, history) => {
    this.props.getCategory(id, history);
  };
  render() {
    const { category } = this.props;
    return (
      <div className="clearfix">
        <a className="nav-link active float-left" href="#">
          {category.categoryName}
        </a>
        <p
          className="icon-trash float-right trash-icon"
          onClick={this.onDeleteClick.bind(this, category.categoryIdentifier)} //we take it from the props above
          style={{ fontSize: "20px" }}
        ></p>

        <Link
          onClick={this.onUpdateClick.bind(
            this,
            category.categoryIdentifier,
            this.props.history
          )}
          to={`/updateCategory/${category.categoryIdentifier}`}
          className="icon-wrench float-right"
          style={{ fontSize: "20px" }}
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
  { deleteCategory, getCategory }
)(CategoryItem);
