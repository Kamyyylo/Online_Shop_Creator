import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/securityAcions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
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
    if (nextProps.security.validToken) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const loginRequest = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(loginRequest);
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="container login-page-background-color scale-thing">
        <form onSubmit={this.onSubmit}>
          <p className="login-register-header">Log in and do the shopping!</p>
          <hr></hr>
          <div className="form-group">
            <input
              type="email"
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
          <br></br>
          <button
            type="submit"
            className="btn btn-dark button-width scale-button"
          >
            Log in
          </button>
        </form>
        <hr></hr>
        <Link to="/register">
          <button className=" btn btn-dark button-width scale-button">
            Don't have an account? Sign up!
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security,
  errors: state.errors
});
export default connect(mapStateToProps, { login })(Login);
