import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";

class Index extends Component {
  render() {
    return (
      <div className="vcLogin flex flex-col justify-center items-center">
        <a href="#">
          <img src="img/assets/vc-full-logo.png" alt="vancoast industries" />
        </a>
        <div className="vcLogin-panel flex flex-col items-center justify-around">
          <h1>Sign In</h1>

          <form className="vcLogin-form flex flex-col justify-center">
            <label for="vcName">UserName or Email*</label>
            <input type="text" id="vcLogin-user" placeholder="" />

            <label for="vcName">Password*</label>
            <input type="text" id="vcLogin-pass" placeholder="" />

            <label for="vcLogin-remember" className="vcLogin-checkbox">
              <input type="checkbox" id="vcLogin-remember" checked="checked" />
              Remember Me
            </label>

            <input type="submit" className="vcLogin-btn" value="Login" />
          </form>

          <p className="">
            <a href="">Apply for Wholesale Account</a>
          </p>
        </div>

        <button className="vcForgot">Forgot my Password</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
