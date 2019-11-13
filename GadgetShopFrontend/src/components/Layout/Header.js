import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getShopMainData } from "../../actions/shopMainDataActions";
import { logout } from "../../actions/securityAcions";
import PropTypes from "prop-types";

class Header extends Component {
  refreshPage() {
    window.parent.location = window.parent.location.href;
  }
  componentDidMount() {
    this.props.getShopMainData();
  }

  logout() {
    this.props.logout();
    window.location.href = "/";
  }

  render() {
    const { validToken, user } = this.props.security;
    const userIsAdmin = (
      <React.Fragment>
        <Link
          className="btn btn-success margin-left-button scale-button"
          to="/changeMainData"
        >
          Edit page<i className="fa fa-edit header-buttons"></i>
        </Link>
      </React.Fragment>
    );
    let adminButton;
    if (user.admin) {
      adminButton = userIsAdmin;
    }
    const userIsLogged = (
      <React.Fragment>
        <p className="user-name-header" to="">
          {user.username}
        </p>
        <Link to="/shoppingCart" className=" ">
          <button className="btn btn-danger btn-warning margin-left-button scale-button">
            Cart
            <i className="fa fa-shopping-cart header-buttons"></i>
          </button>
        </Link>
        {adminButton}
        <button
          className="btn btn-info margin-left-button scale-button"
          onClick={this.logout.bind(this)}
        >
          Log out <i className="fa fa-sign-out header-buttons "></i>
        </button>
      </React.Fragment>
    );

    const { shopMainData } = this.props.shopMainData;
    let address;
    const changeHeaderAddress = () => {
      if (validToken) {
        address = "/dashboard";
      } else {
        address = "";
      }
    };
    changeHeaderAddress();
    let headerLoggedData;
    if (validToken && user) {
      headerLoggedData = userIsLogged;
    }
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-2 px-md-4 header-background border-bottom shadow-sm">
        <h4 className="my-0 mr-md-auto header-shop-name scale-thing">
          <Link className="header-link-deco" to={`${address}`}>
            {shopMainData.shopName}
          </Link>
        </h4>
        {headerLoggedData}
      </div>
    );
  }
}

Header.propTypes = {
  shopMainData: PropTypes.object.isRequired,
  getShopMainData: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  shopMainData: state.shopMainData,
  security: state.security
});

export default connect(mapStateToProps, { getShopMainData, logout })(Header);
