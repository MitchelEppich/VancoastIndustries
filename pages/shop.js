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
  GeneralStrains,
  BrandBoards
} from "../components/shop";

class Index extends Component {
  // static async getInitialProps({ store, req }) {
  //   store.dispatch(actions.getStrains());
  //   return {};
  // }

  constructor(props) {
    super(props);
    // props.getStrains();
    this.state = {
      isClient: typeof document != undefined
    };
  }

  render() {
    return (
      <Layout {...this.props} isClient={this.state.isClient}>
        <div
          className={
            this.props.shop.activeBrandIndex == 0
              ? "vcWholesale-hero vcBg flex justify-center items-center" +
                this.props.shop.brands[this.props.shop.activeBrandIndex]
                  .bgImageClass
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
          <Filters {...this.props} />
          <GeneralStrains {...this.props} />
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
    setBrandIndex: input => dispatch(actions.setBrandIndex(input)),
    setCurrentProduct: product => {
      dispatch(actions.quickAddToCartQty(0));
      dispatch(actions.setCurrentProduct(product));
    },
    toggleFilter: options => dispatch(actions.toggleFilter(options)),
    getStrains: () => dispatch(actions.getStrains())
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
