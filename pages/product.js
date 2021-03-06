import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import {
  BrandLogo,
  MainImage,
  Header,
  SeedSelect,
  SeedSelectorMobile,
  CartOptions,
  SimilarSeeds,
  MoreInfo
} from "../components/product";

class Index extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <div
          className={
            "vcBrand-hero flex justify-center items-start " +
            this.props.shop.brands[this.props.shop.activeBrandIndex]
              .bgImageClass
          }
        />

        <article>
          <div className="vcSingle xxl:w-4/5 w-full mx-auto flex sm:flex-col md:flex-col flex-row lg:flex-row justify-center items-center">
            <BrandLogo
              currentProduct={this.props.product.currentProduct}
              {...this.props}
            />

            <MainImage
              currentProduct={this.props.product.currentProduct}
              {...this.props}
            />

            <div className="vcSingle-sectionThree flex flex-col justify-center items-start">
              <Header
                // currentProduct={this.props.product.currentProduct}
                {...this.props}
              />
              <SeedSelect {...this.props} />
              <SeedSelectorMobile {...this.props} />
              <CartOptions
                currentProduct={this.props.product.currentProduct}
                {...this.props}
              />
            </div>
          </div>
        </article>

        <div className="mt-1">
          <MoreInfo {...this.props} />
        </div>

        <div className="vcWholesale-page">
          <SimilarSeeds {...this.props} />
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
    modifyPotentialQuantity: input =>
      dispatch(actions.modifyPotentialQuantity(input)),
    modifyCart: input => dispatch(actions.modifyCart(input)),
    setBrandIndex: index => dispatch(actions.setBrandIndex(index)),
    setCurrentProduct: product => {
      dispatch(actions.quickAddToCartQty(0));
      dispatch(actions.setCurrentProduct(product));
    },
    modifySavedItems: input => dispatch(actions.modifySavedItems(input)),
    toggleFullSummary: input => dispatch(actions.toggleFullSummary()),
    toggleAlert: alertObj => dispatch(actions.toggleAlert(alertObj)),
    setQuickView: input => dispatch(actions.setQuickView(input)),
    toggleAnimation: active => dispatch(actions.toggleAnimation(active))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
