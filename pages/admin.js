// lib
import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
// custom
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Admin from "../components/admin";
const dev = process.env.NODE_ENV !== "production";

class Index extends Component {
  componentDidMount() {
    if (dev) {
      window.addEventListener("keypress", e => {
        if (e.shiftKey && e.code === "KeyP") {
          console.log(this.props);
        }
      });
    }
    this.recallVerifiedUser();
  }
  render() {
    return <Admin {...this.props} />;
  }

  recallVerifiedUser = () => {
    let token,
      rememberMe = true;
    token = localStorage.getItem("token");
    if (token == undefined) {
      token = sessionStorage.getItem("token");
      rememberMe = false;
    }
    if (token != undefined)
      this.props.verifyCredentials({ jwt: token, rememberMe }).then(res => {
        if (this.props.account.currentUser.admin) {
          this.props.getAccounts({
            jwt: this.props.account.currentUser.jwt,
            all: true
          });
        }
      });
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setAccountView: account => dispatch(actions.setAccountView(account)),
    handleStatusChangeNote: note =>
      dispatch(actions.handleStatusChangeNote(note)),
    changeAccountStatus: statusAndAccount =>
      dispatch(actions.changeAccountStatus(statusAndAccount)),
    searchAccounts: searchTerm => dispatch(actions.searchAccounts(searchTerm)),
    sortAccounts: sortByIndex => dispatch(actions.sortAccounts(sortByIndex)),
    verifyCredentials: credentials =>
      dispatch(actions.verifyCredentials(credentials)),
    getAccounts: input => dispatch(actions.getAccounts(input)),
    toggleShowOrderBy: () => dispatch(actions.toggleShowOrderBy())
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
