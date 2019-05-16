import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserAlt } from "@fortawesome/free-solid-svg-icons";

class Index extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <article className="vcPage-content vcCheckout">
          <div className="">
            <h2 className="text-4xl">Thank you!</h2>
            <h2 className="text-xl text-grey-lightest my-1 pb-4">
              Your order has been received.
            </h2>

            <h3 className="text-xl uppercase text-blue my-10 font-bold">
              Order Number: <span>#1203871203</span>
            </h3>
            <div className="justify-center w-full flex my-4 opacity-75">
              <div className="bg-grey-light rounded-full h-100 w-100 flex items-center justify-center ">
                <FontAwesomeIcon
                  icon={faUserAlt}
                  className="fa-4x text-white"
                />
              </div>
            </div>

            <p className="text-xl italic w-4/5 mx-auto text-center">
              "Thank you! We appreciate your business. We will be processing
              your wholesale order soon and will email your invoice with
              tracking number as soon as it has been shipped. - Vanessa"
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
