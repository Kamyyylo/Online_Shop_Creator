import React, { Component } from "react";
import { Link } from "react-router-dom";
import { createNewUser } from "../../actions/securityAcions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      fullName: "",
      password: "",
      confirmPassword: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      fullName: this.state.fullName,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    this.props.createNewUser(newUser, this.props.history);
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <p className="login-register-header">Set up new account</p>
          <hr></hr>
          <div className="form-group">
            <input
              type="text"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.username
              })}
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
            {errors.username && (
              <div className="invalid-feedback text-right">
                {errors.username}
              </div>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.fullName
              })}
              placeholder="Full name"
              name="fullName"
              value={this.state.fullName}
              onChange={this.onChange}
            />
            {errors.fullName && (
              <div className="invalid-feedback text-right">
                {errors.fullName}
              </div>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.password
              })}
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            {errors.password && (
              <div className="invalid-feedback text-right">
                {errors.password}
              </div>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              className={classnames("form-control form-control-lg", {
                "is-invalid": errors.confirmPassword
              })}
              placeholder="Confirm password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.onChange}
            />
            {errors.confirmPassword && (
              <div className="invalid-feedback text-right">
                {errors.confirmPassword}
              </div>
            )}
          </div>
          <br></br>
          <button
            type="submit"
            className="btn btn-primary button-width scale-button"
          >
            Sign up
          </button>
        </form>
        <hr></hr>
        <Link to="/login">
          <button className=" btn btn-primary button-width   scale-button">
            Already have an account? Log in!
          </button>
        </Link>
      </div>
    );
  }
}

Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createNewUser }
)(Register);
