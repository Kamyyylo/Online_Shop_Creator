import React, { Component } from "react";
import CategoryItem from "./Category/CategoryItem";
import CreateCategoryButton from "./Category/CreateCategoryButton";

class Dashboard extends Component {
  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <CreateCategoryButton />
            <li className="nav-item">
              <h5 className="sidebar-heading  text-center align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Categories</span>
              </h5>
            </li>
            <li>
              <a className="nav-link active" href="#">
                <span data-feather="home"></span>
                <CategoryItem />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Dashboard;
