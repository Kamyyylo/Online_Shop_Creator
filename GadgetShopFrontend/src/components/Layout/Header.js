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
        <Link className="btn btn-success" to="/changeMainData">
          Change main data
        </Link>
      </React.Fragment>
    );
    let adminButton;
    if (user.admin) {
      adminButton = userIsAdmin;
    }
    const userIsLogged = (
      <React.Fragment>
        <Link
          to="/shoppingCart"
          className="icon-basket p-2  icon-basket-attributes"
        />
        {adminButton}
        <p className="p-2 text-dark" to="">
          {user.username}
        </p>
        <p className="icon-user-outline"></p>
        <p className="btn btn-primary" onClick={this.logout.bind(this)}>
          Log out
        </p>
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
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to={`${address}`}>{shopMainData.shopName}</Link>
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

export default connect(
  mapStateToProps,
  { getShopMainData, logout }
)(Header);
