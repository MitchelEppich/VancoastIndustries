//lib
import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";
//custom
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import {
  Filters,
  Heading,
  GeneralSeeds,
  BrandBoards
} from "../components/shop";

class Index extends Component {
  render() {
    return (
      <Layout>
        <div
          className={
            this.props.shop.activeBrandIndex == 0
              ? "vcWholesale-hero vcBg flex justify-center items-center"
              : "vcBrand-hero vcBg flex justify-center items-center " +
                this.props.shop.brands[this.props.shop.activeBrandIndex]
                  .bgImageClass
          }
        >
          {this.props.shop.activeBrandIndex != 0 ? (
            <img
              src={
                this.props.shop.brands[this.props.shop.activeBrandIndex].logo
              }
              alt={
                this.props.shop.brands[this.props.shop.activeBrandIndex].name
              }
            />
          ) : null}
        </div>

        <Heading {...this.props} />

        <div className="vcWholesale-page">
          <Filters path={Router.asPath} {...this.props} />
          <GeneralSeeds {...this.props} />
        </div>

        <div className="vcWholesale-content">
          <div className="vcBrand-boards flex flex-col">
            <BrandBoards {...this.props} />
          </div>
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleFilterVisibility: isFilterVisible =>
      dispatch(actions.toggleFilterVisibility(isFilterVisible)),
    setBrandIndex: index => dispatch(actions.setBrandIndex(index)),
    toggleFilter: options => dispatch(actions.toggleFilter(options))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
