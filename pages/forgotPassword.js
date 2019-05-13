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
        <div className="vcLogin-panel flex flex-col items-center justify-around">
          {/* <form
            className="vcLogin-form flex flex-col justify-center"
            onSubmit={e => {
              e.preventDefault();
              const form = e.target;
              const formData = new window.FormData(form);

              let email = formData.get("email");
              let password = formData.get("pass");

              this.props.verifyCredentials({ email, password }).then(res => {
                if (res != null && res.error == null) window.history.back();
              });
            }}
          > */}
          <div className="flex justify-end w-full absolute pin-t pin-r mt-2 mr-3">
            <FontAwesomeIcon
              icon={faTimes}
              className="text-grey-light fa-2x cursor-pointer hover:text-blue"
            />
          </div>

          <div className="text-center mt-8">
            <FontAwesomeIcon
              icon={faUserLock}
              className="fa-7x text-grey-light opacity-50 mb-2"
            />
            <h2 className="text-3xl uppercase text-blue font-bold">
              Forgot your Password?
            </h2>
            <p className="p-4 w-full px-12">
              Enter your email address below and we will send you password reset
              instructions.
            </p>
            <div className="w-4/5 mx-auto">
              <input
                className="p-2 mt-4 bg-grey-light w-4/5 mx-auto"
                type="text"
                id="forgotPassword"
                name="forgotPassword"
                placeholder="youremail@mail.com"
              />
            </div>
          </div>

          <div className="w-4/5 mx-auto mt-1">
            <button type="submit" className="px-10 p-4 w-full bg-blue">
              Reset my Password
            </button>
          </div>
          <div className="w-4/5 mx-auto mt-1">
            <p className="text-xs uppercase opacity-50 font-bold">
              * If you do not receive the email to reset your password within a
              few minutes, please check your Spam or Bulk E-Mail.
            </p>
          </div>

          {/* </form> */}
        </div>

        <button
          className="vcForgot"
          onClick={() => {
            Router.push("/login");
          }}
        >
          Return to Login Screen
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
