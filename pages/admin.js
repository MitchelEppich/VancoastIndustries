// lib
import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
// custom
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Admin from "../components/admin";

class Index extends Component {
  render() {
    return <Admin {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
