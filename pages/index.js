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

import axios from "axios";

class Index extends Component {
  static async getInitialProps({ store, req }) {
    store.dispatch(actions.getStrains());
    return {};
  }
  render() {
    return (
      <Layout {...this.props}>
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
  return {
    setBrandIndex: index => dispatch(actions.setBrandIndex(index)),
    setCurrentProduct: product => {
      dispatch(actions.quickAddToCartQty(0));
      dispatch(actions.setCurrentProduct(product));
    },
    getStrains: () => dispatch(actions.getStrains())
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
