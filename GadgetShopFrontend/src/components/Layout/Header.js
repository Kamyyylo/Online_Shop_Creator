import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getShopMainData } from "../../actions/shopMainDataActions";
import PropTypes from "prop-types";

class Header extends Component {
  refreshPage() {
    window.parent.location = window.parent.location.href;
  }
  componentDidMount() {
    this.props.getShopMainData();
  }
  render() {
    const { shopMainData } = this.props.shopMainData;
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/dashboard">{shopMainData.shopName}</Link>
        </h4>
        <Link className="btn btn-success" to="/changeMainData">
          Change main data
        </Link>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link
            to="/shoppingCart"
            className="icon-basket p-2  icon-basket-attributes"
          />

          <Link className="p-2 text-dark" to="">
            Name
          </Link>
        </nav>
        <Link className="btn btn-outline-primary" to="">
          Sign up
        </Link>
      </div>
    );
  }
}

Header.propTypes = {
  shopMainData: PropTypes.object.isRequired,
  getShopMainData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  shopMainData: state.shopMainData
});

export default connect(
  mapStateToProps,
  { getShopMainData }
)(Header);
