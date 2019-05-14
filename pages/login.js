import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Router from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock, faTimes } from "@fortawesome/free-solid-svg-icons";

class Index extends Component {
  render() {
    return (
      <div className="vcLogin flex flex-col justify-center items-center">
        <a href="#">
          <img
            src="../static/img/assets/vc-full-logo.png"
            alt="vancoast industries"
          />
        </a>
        <div className="vcLogin-panel flex flex-col items-center justify-around relative">
          <div className="flex justify-end w-full absolute pin-t pin-r mt-2 mr-3">
            <FontAwesomeIcon
              icon={faTimes}
              className="text-grey-light fa-2x cursor-pointer hover:text-blue"
            />
          </div>
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
                  if (res != null && res.error == null) window.history.back();
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
            <a href="">Apply for Wholesale Account</a>
          </p>
        </div>

        {/* <div className="absolute pin-x mx-auto h-550 mt-16 w-500 bg-white shadow-md">
            <div className="flex justify-end w-full absolute pin-t pin-r mt-2 mr-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-grey-light fa-2x cursor-pointer hover:text-blue"
              />
            </div>

            <div className="text-center mt-24">
              <FontAwesomeIcon
                icon={faUserLock}
                className="fa-7x text-grey-light mb-10"
              />
              <h2 className="text-3xl uppercase text-blue font-bold">
                Forgot your Password?
              </h2>
              <p className="p-4 w-full px-12">
                Enter your email address below and we will send you password
                reset instructions.
              </p>
              <input
                className="p-3 mt-4 bg-grey-light w-4/5 mx-auto"
                type="text"
                id="forgotPassword"
                name="forgotPassword"
                placeholder="youremail@mail.com"
              />
            </div>

            <div className="w-4/5 mx-auto mt-4">
              <input
                type="submit"
                className="px-10 p-3 w-full"
                value="Reset my Password"
              />
            </div>
            <div className="w-4/5 mx-auto mt-4">
              <p className="text-xs uppercase opacity-50 font-bold">
                * If you do not receive the email to reset your password within
                a few minutes, please check your Spam or Bulk E-Mail.
              </p>
            </div>
          </div> */}
        <button
          className="vcForgot"
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
