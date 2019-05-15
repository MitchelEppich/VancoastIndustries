import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";

class Index extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <article className="vcPage-content vcCheckout">
          <div className="vcThank-you">
            <h2>Your order has been received</h2>

            <h3>
              Order Number: <span>#1203871203</span>
            </h3>

            <p>
              "Thank you! We appreciate your business. We will be processing
              your wholesale order soon and will email your invoice with
              tracking number as soon as it has been shipped. ~ Vanessa"
            </p>

            <input
              type="submit"
              className="vcCheckout-btn"
              value="Print Page"
            />
          </div>
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
