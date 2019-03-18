import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";

class Index extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="vcPage-hero flex justify-center vcBg vcAbout items-center" />
        <article className="vcPage-content vcAbout">
          <header>
            <h1>About Vancoast Industries</h1>
            <p>
              Welcome to Vancoast Industries! The world's number one Wholesale
              Cannabis Seeds supplier.
            </p>
          </header>

          <p>
            Vancoast Industries is a Vancouver, BC based company that supplies
            cannabis strains of indoor, outdoor, and medical grade varieties to
            the Canadian cannabis industry. With over 80+ strains and counting
            to choose from, discreet packaging, and trustworthy delivery,
            Vancoast Industries is the perfect choice for your supplying your
            store with cannabis seeds.
          </p>

          <p>
            Rather than just choosing from 1 cannabis company, we provide access
            to multiple seed companies at wholesale prices. Choose your favorite
            seeds from each individual company, add them to your cart and they
            will all be included in the same order.
          </p>

          <p>
            Each order will be sent out in retail packaging ready for setup on
            store shelves to offer to customers and increase your store revenue.
            Thank you for choosing Vancoast Industries for reliable wholesale
            cannabis seeds.
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
