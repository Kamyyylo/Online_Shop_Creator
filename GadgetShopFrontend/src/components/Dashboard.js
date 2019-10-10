import React, { Component } from "react";
import CategoryItem from "./Category/CategoryItem";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1 className="alert alert-warning">Dashboard</h1>
        <CategoryItem />
      </div>
    );
  }
}

export default Dashboard;
