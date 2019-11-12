import React, { Component } from "react";
import CategoryItem from "./Category/CategoryItem";
import CreateCategoryButton from "./Category/CreateCategoryButton";
import { connect } from "react-redux";
import { getCategories } from "../actions/categoryActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class Dashboard extends Component {
  componentDidMount() {
    //every time we load component it hasto load also the categories
    this.props.getCategories();
  }

  render() {
    const { categories } = this.props.category;
    return (
      <nav className="float-left col-md-2 d-inline-block   sidebar header-background categories-div-style">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <Link
              to="/addCategory"
              className="btn  btn-success scale-button add-category-text-margin"
            >
              Add category
            </Link>
            <li className="nav-item ">
              <h5 className=" text-center align-items-center px-3 mt-4 mb-3 ">
                <span className="categories-header-text">Categories</span>
              </h5>
            </li>
            <li>
              <span data-feather="home"></span>
              {categories.map(category => (
                <CategoryItem key={category.id} category={category} />
              ))}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
Dashboard.propTypes = {
  category: PropTypes.object.isRequired,
  getCategories: PropTypes.func.isRequired
};
//we taking from reducer the values
const mapStateToProps = state => ({
  category: state.category
});
//categories will be loaded everytime when we open the dashboard
export default connect(mapStateToProps, { getCategories })(Dashboard);
