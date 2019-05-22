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
  }
  componentWillMount() {
    // this.props.getAccounts({ limit: 100 });
  }
  render() {
    return <Admin {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAccountView: account => dispatch(actions.setAccountView(account)),
    handleStatusChangeNote: note =>
      dispatch(actions.handleStatusChangeNote(note)),
    changeAccountStatus: statusAndAccount =>
      dispatch(changeAccountStatus(statusAndAccount)),
    searchAccounts: searchTerm => dispatch(actions.searchAccounts(searchTerm)),
    sortAccounts: sortByIndex => dispatch(actions.sortAccounts(sortByIndex)),
    getAccounts: input => dispatch(actions.getAccounts(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
