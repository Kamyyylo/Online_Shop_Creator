import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import { updateShopMainData } from "../../actions/shopMainDataActions";
class ChangeMainData extends Component {
  constructor() {
    super();
    this.state = {
      shopName: "",
      pictureOnTheDashboard: "",
      contactEmail: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    if (!this.props.security.user.admin) {
      this.props.history.push("/dashboard");
    }

    const {
      id,
      shopName,
      pictureOnTheDashboard,
      contactEmail
    } = this.props.shopMainData;
    this.setState({
      id,
      shopName,
      pictureOnTheDashboard,
      contactEmail
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const {
      id,
      shopName,
      pictureOnTheDashboard,
      contactEmail
    } = nextProps.shopMainData;
    this.setState({
      id,
      shopName,
      pictureOnTheDashboard,
      contactEmail
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const updateShopMainData = {
      id: 1,
      shopName: this.state.shopName,
      pictureOnTheDashboard: this.state.pictureOnTheDashboard,
      contactEmail: this.state.contactEmail
    };
    this.props.updateShopMainData(updateShopMainData, this.props.history);
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="container login-page-background-color scale-thing">
        <div className="row">
          <div className="col-md-10 m-auto">
            <h4 className="display-4 text-center">Change Main Data</h4>
            <br></br>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.shopName
                  })}
                  name="shopName"
                  placeholder="Name of the shop"
                  value={this.state.shopName}
                  onChange={this.onChange}
                />
                {errors.shopName && (
                  <div className="invalid-feedback text-right">
                    {errors.shopName}
                  </div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.pictureOnTheDashboard
                  })}
                  name="pictureOnTheDashboard"
                  placeholder="Name of the main page image with its extension f.e jpg, png. Size 1200x550px"
                  value={this.state.pictureOnTheDashboard}
                  onChange={this.onChange}
                />
                {errors.pictureOnTheDashboard && (
                  <div className="invalid-feedback text-right">
                    {errors.pictureOnTheDashboard}
                  </div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.contactEmail
                  })}
                  name="contactEmail"
                  placeholder="Contact email on the footer"
                  value={this.state.contactEmail}
                  onChange={this.onChange}
                />
                {errors.contactEmail && (
                  <div className="invalid-feedback text-right">
                    {errors.contactEmail}
                  </div>
                )}
              </div>
              <input type="submit" className="btn btn-dark btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ChangeMainData.propTypes = {
  updateShopMainData: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  shopMainData: state.shopMainData.shopMainData,
  errors: state.errors,
  security: state.security
});

export default connect(mapStateToProps, { updateShopMainData })(ChangeMainData);
