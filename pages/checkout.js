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
  Header
} from "../components/checkout";
class Index extends Component {
  componentWillUnmount() {
    this.props.changeStep("Cart");
  }
  render() {
    let stepComponents = [
      <Cart page="cart" {...this.props} />,
      <Shipping {...this.props} />,
      <Billing {...this.props} />,
      <Payment {...this.props} />
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
    processOrder: input => dispatch(actions.processOrder(input)),
    updateAccount: input => dispatch(actions.updateAccount(input)),
    deleteAddress: input => dispatch(actions.deleteAddress(input)),
    setAddressToEdit: input => dispatch(actions.setAddressToEdit(input)),
    modifyOrderDetails: orderDetails =>
      dispatch(actions.modifyOrderDetails(orderDetails)),
    toggleAlert: alertObj => dispatch(actions.toggleAlert(alertObj)),
    modifyCart: input => dispatch(actions.modifyCart(input)),
    toggleAlert: alertObj => dispatch(actions.toggleAlert(alertObj))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
