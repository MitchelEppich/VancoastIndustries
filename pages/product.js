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
  CartOptions,
  SimilarSeeds,
  MoreInfo
} from "../components/product";
import QuickView from "../components/product/quickView";

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
          <div className="vcSingle w-4/5 mx-auto flex sm:flex-col flex-row lg:flex-row justify-center items-center">
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
        <QuickView {...this.props} />

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
    addToWishList: input => dispatch(actions.addToWishList(input)),
    toggleFullSummary: input => dispatch(actions.toggleFullSummary()),
    toggleAlert: alertObj => dispatch(actions.toggleAlert(alertObj))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
