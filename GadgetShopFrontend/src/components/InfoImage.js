import React, { Component } from "react";
import { connect } from "react-redux";

class InfoImage extends Component {
  render() {
    const { shopMainData } = this.props.shopMainData;
    return (
      <div className="info-image">
        <img src={`/images/${shopMainData.pictureOnTheDashboard}`} alt="" />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  shopMainData: state.shopMainData
});

export default connect(mapStateToProps, null)(InfoImage);
