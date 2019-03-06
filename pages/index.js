// lib
import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
// custom
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Banner from "../components/home/banner";
import OurBrands from "../components/home/ourBrands";
import PreviewStrains from "../components/home/previewStrains";
import About from "../components/home/about";
import Specials from "../components/home/specials";
import GetStarted from "../components/home/getStarted";

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
  return {};
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
