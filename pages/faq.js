import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";

class Index extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <div class="vcPage-hero flex justify-center vcBg vcFaq items-center" />

        <article class="vcPage-content vcFaq">
          <header>
            <h1>FAQ</h1>
            <p>
              These are some of the most frequently asked questions from our
              wholesale customers.
            </p>
          </header>

          <h2>What countries does Vancoast Industries serve?</h2>
          <p>
            Answer: At the moment we only sell wholesale seeds to companies
            within Canada. Once cannabis laws have changed internationally, we
            will begin to look at ways to serve our international customers.
          </p>

          <h2>How do I get approved for a wholesale account?</h2>
          <p>
            Answer: To get access to the wholesale program by Vancoast, request
            access by submitting the wholesale application and one of our Sales
            Managers will review the application. If approved, the Sales Manager
            will create a wholesale account which will grant you access and send
            the details to you. It's that simple.
          </p>

          <h2>How do I pay for my seeds?</h2>
          <p>
            Answer: You can pay for your seeds VIA cash, cheque or Interac
            e-Transfer. If paying by cash/cheque, once your payment is received
            in the mail, your seeds will be shipped to your address. If paying
            by Interac e-Transfer, you will receive instructions on which email
            to send your payment to.
          </p>

          <h2>What credentials do I need to be approved for Wholesale?</h2>
          <p>
            Answer: To be approved for a wholesale account, you will need a
            legitimate registered business, a business license with
            identification number, a phone number and email address where your
            company can be reached. All applications are screened prior to
            approval.
          </p>

          <h2>What shipping options are available?</h2>
          <p>
            Answer: After completing a wholesale order of only $500 or more,
            Vancoast Industries we will ship out your order for FREE to your
            store so that your ready to stock your shelves ASAP.
          </p>
        </article>
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
