import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import {
  Cart,
  Billing,
  Shipping,
  Payment,
  Confirmation,
  Header
} from "../components/checkout";
import Router from "next/router";

class Index extends Component {
  render() {
    let stepComponents = [
      <Cart page="cart" {...this.props} />,
      <Shipping {...this.props} />,
      <Billing {...this.props} />,
      <Payment {...this.props} />,
      <Confirmation {...this.props} />
    ];
    let currentStepIndex = this.props.checkout.steps.indexOf(
      this.props.checkout.currentStep
    );
    let currentStep = stepComponents[currentStepIndex];
    return (
      <Layout {...this.props}>
        <article className="vcPage-content vcCheckout">
          <Header title={this.props.checkout.currentStep} {...this.props} />
          {currentStep}
        </article>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeStep: step => dispatch(actions.changeStep(step)),
    modifyOrderDetails: orderDetails =>
      dispatch(actions.modifyOrderDetails(orderDetails)),
    toggleAlert: alertObj => dispatch(actions.toggleAlert(alertObj)),
    modifyCart: input => dispatch(actions.modifyCart(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
