import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Router from "next/router";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock, faTimes } from "@fortawesome/free-solid-svg-icons";

class Index extends Component {
  render() {
    return (
      <div className="vcLogin flex flex-col justify-center items-center">
        <img
          className="sm:h-16 sm:my-3 my-12"
          src="../static/img/assets/vc-full-logo.png"
          alt="vancoast industries"
        />
        <div className="vcLogin-panel flex flex-col items-center justify-around relative">
          <Link href="/">
            <div className="flex justify-end w-full absolute pin-t pin-r mt-2 mr-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-grey-light fa-2x cursor-pointer hover:text-blue"
              />
            </div>
          </Link>
          <h1>Sign In</h1>

          <form
            className="vcLogin-form flex flex-col justify-center"
            onSubmit={e => {
              e.preventDefault();
              const form = e.target;
              const formData = new window.FormData(form);

              let email = formData.get("email");
              let password = formData.get("pass");
              let rememberMe = formData.get("rememberMe") == "on";

              this.props
                .verifyCredentials({ email, password, rememberMe })
                .then(res => {
                  if (res != null && res.error == null) {
                    if (this.props.misc.path) {
                      Router.back();
                    } else {
                      Router.push("/shop");
                    }
                  }
                });
            }}
          >
            <label htmlFor="vcName">Email*</label>
            <input
              type="text"
              id="vcLogin-user"
              name="email"
              placeholder=""
              autoComplete="email"
            />

            <label htmlFor="vcName">Password*</label>
            <input
              type="password"
              id="vcLogin-pass"
              name="pass"
              placeholder=""
              autoComplete="current-password"
            />

            {this.props.account.currentUser != null &&
            this.props.account.currentUser.error != null ? (
              <p className="text-red">{this.props.account.currentUser.error}</p>
            ) : null}

            <label htmlFor="vcLogin-remember" className="vcLogin-checkbox">
              <input
                type="checkbox"
                id="vcLogin-remember"
                defaultChecked={true}
                name="rememberMe"
              />
              Remember Me
            </label>

            <input type="submit" className="vcLogin-btn" value="Login" />
          </form>

          <p className="">
            <Link href="/wholesale-application">
              <a aria-label="apply for wholesale account">
                Apply for Wholesale Account
              </a>
            </Link>
          </p>
        </div>
        <button
          className="vcForgot px-5 p-3 m-3"
          onClick={() => {
            Router.push("/forgotPassword");
          }}
        >
          Forgot my Password
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    verifyCredentials: credentials =>
      dispatch(actions.verifyCredentials(credentials)),
    resetPassword: input => dispatch(actions.resetPassword(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
