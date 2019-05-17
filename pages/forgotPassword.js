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
        <img
          className="sm:h-16 sm:my-3 my-12"
          src="../static/img/assets/vc-full-logo.png"
          alt="vancoast industries"
        />
        <div className="vcLogin-panel flex flex-col items-center justify-around">
          <form
            className="vcLogin-form flex flex-col justify-center"
            onSubmit={e => {
              e.preventDefault();
              const form = e.target;
              const formData = new window.FormData(form);

              let email = formData.get("email");

              this.props.resetPassword({ email });
            }}
          >
            <div className="flex justify-end w-full absolute pin-t pin-r mt-2 mr-3">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-grey-light fa-2x cursor-pointer hover:text-blue"
              />
            </div>

            <div className="text-center">
              <FontAwesomeIcon
                icon={faUserLock}
                className="text-5xl sm:text-4xl text-grey-light opacity-30 mb-2"
              />
              <h2 className="sm:text-sm text-3xl uppercase text-blue font-bold">
                Forgot your Password?
              </h2>
              <p className="p-4 w-full">
                Enter your email address below and we will send you password
                reset instructions.
              </p>
              <div className="w-4/5 mx-auto">
                <input
                  className="p-2 mt-4 bg-grey-light w-4/5 mx-auto"
                  type="text"
                  id="vcEmail"
                  name="email"
                  placeholder="youremail@mail.com"
                />
              </div>
            </div>

            <div className="w-4/5 mx-auto mt-1">
              <input
                value="Reset my Password"
                type="submit"
                className="vcLogin-btn"
              />
            </div>
            <div className="w-4/5 mx-auto mt-1">
              <p className="text-xs uppercase opacity-50 font-bold">
                * If you do not receive the email to reset your password within
                a few minutes, please check your Spam or Bulk E-Mail.
              </p>
            </div>
          </form>
        </div>

        <button
          className="vcForgot vcForgot px-5 p-3 m-3"
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
