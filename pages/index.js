// lib
import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
// custom
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import {
  Banner,
  OurBrands,
  PreviewStrains,
  About,
  Specials,
  GetStarted
} from "../components/home";

class Index extends Component {
  render() {
    return (
      <Layout>
        <div>
          <Banner {...this.props} />
          <div className="vcWrap">
            <OurBrands {...this.props} />
            <div className="vcShop-section">
              <PreviewStrains {...this.props} />
              <About {...this.props} />
              <Specials {...this.props} />
            </div>
            <GetStarted {...this.props} />
          </div>
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { setBrandIndex: index => dispatch(actions.setBrandIndex(index)) };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
