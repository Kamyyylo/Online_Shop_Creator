import React, { Component } from "react";
import CategoryItem from "./Category/CategoryItem";
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
    const { user } = this.props.security;
    const userIsAdmin = (
      <React.Fragment>
        <Link
          to="/addCategory"
          className="btn  btn-success scale-button add-category-text-margin"
        >
          Add category
        </Link>
      </React.Fragment>
    );
    let adminButtons;
    if (user.admin) {
      adminButtons = userIsAdmin;
    }
    return (
      <nav className="float-left col-md-2 d-inline-block header-background category-box-shadow">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            {adminButtons}
            <li className="nav-item ">
              <h5 className=" text-center align-items-center px-3 mt-4 mb-3 ">
                <hr></hr>

                <span className="categories-header-text">
                  <i className="fa fa-shopping-basket category-header-icon"></i>
                  Categories
                </span>
                <hr></hr>
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
  getCategories: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired
};
//we taking from reducer the values
const mapStateToProps = state => ({
  category: state.category,
  security: state.security
});
//categories will be loaded everytime when we open the dashboard
export default connect(mapStateToProps, { getCategories })(Dashboard);
