import React, { Component } from "react";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    const { shopMainData } = this.props.shopMainData;
    return (
      <footer className="page-footer font-small footer">
        <div className=" copyright footer-copyright py-3 float-left  ">
          © 2019 Copyright: Kamil Kamyszek
        </div>
        <div className="contact py-3 text-right  ">
          Contact: {shopMainData.contactEmail}
        </div>
      </footer>
    );
  }
}

const mapStateToProps = state => ({
  shopMainData: state.shopMainData
});

export default connect(
  mapStateToProps,
  null
)(Footer);
