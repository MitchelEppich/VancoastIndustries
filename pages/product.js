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
          <div className="vcSingle vcWholesale-content flex flex-col lg:flex-row justify-center items-center">
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
                currentProduct={this.props.product.currentProduct}
                {...this.props}
              />

              <SeedSelect
                currentProduct={this.props.product.currentProduct}
                {...this.props}
              />
              <CartOptions
                currentProduct={this.props.product.currentProduct}
                {...this.props}
              />
            </div>
          </div>
        </article>
        <div className="mt-10">
          <MoreInfo {...this.props} />
        </div>

        <div className="vcWholesale-page">
          <SimilarSeeds
            // currentProduct={this.props.product.currentProduct}
            {...this.props}
          />
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setBrandIndex: index => dispatch(actions.setBrandIndex(index)),
    setCurrentProduct: product => dispatch(actions.setCurrentProduct(product))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
