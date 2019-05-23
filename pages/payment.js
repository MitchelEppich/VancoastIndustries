import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";

class Index extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <div class="vcPage-hero flex justify-center vcBg vcPayment items-center" />

        <article class="vcPage-content vcPayment px-4">
          <header>
            <h1>Payment Options</h1>
            <p className="px-4">
              These are the current payments we accept for orders at Vancoast
              Industries
            </p>
          </header>

          <p className="px-4">
            At Vancoast Industries we understand the importance of security and
            privacy. Any financial or personal information will remain secured
            as we value our customers and their privacy. For security purposes,
            we do not store any payment information. Any information identifying
            the purchase is anonymous and non-identifiable as to what it was
            that your purchased.
          </p>

          <p className="px-4">
            Since we only offer wholesale within Canada, these are the following
            payment options:
          </p>
          <h2 className="mb-2">Cash/Cheque Payment in the Mail</h2>

          <p className="px-4">Send your cash payments or cheques to:</p>

          <address className="px-4">
            Vancoast Industries
            <br />
            P.O. Box 98081 Vancouver, BC V6Z 2Z7
            <br />
            Canada
          </address>
          <br />
          <p className="px-4">
            Cash is one of the safest ways to pay for wholesale cannabis seeds
            order since its untraceable. When you place a wholesale order and
            choose cash as the payment method, you will then receive
            instructions on where to send the payment after placing the order.
          </p>

          <p className="px-4">
            <strong>Pro Tip:</strong> For added security and privacy, you can
            wrap your cash with carbon paper, tin foil or even newspaper. Place
            it inside an envelope addressed to us.
          </p>

          <p className="px-4">
            <strong>VERY IMPORTANT:</strong> include a piece of paper with your
            reference number on it or the printed order form with reference
            number in the envelope with your order.
          </p>
          <h2 className="mb-2">EMT Interac Payment</h2>

          <p className="px-4">
            For customers with Canadian banking we will also accept EMT Interac
            payments. Simply log into your bank account and initiate the email
            money transfer. The instructions on where to send the payment will
            be provided after choosing 'Email Money Transfer' and placing the
            order.
          </p>

          <p className="px-4">
            For any concerns or questions, we are always available to talk over
            the phone:
          </p>

          <p className="px-4">+1 (800) 805-7835</p>

          <p className="px-4">
            Our email customer service (VIA contact page) will also answer your
            inquiries within 24 hours.
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
