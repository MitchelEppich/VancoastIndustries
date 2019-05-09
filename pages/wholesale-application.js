import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";

class Index extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="vcPage-hero justify-center vcBg vcWholesale items-center" />

        <article className="vcPage-content vcWholesale">
          <header>
            <h1>Wholesale Application</h1>
            <p>
              To apply for Vancoast Industries Cannabis Seed Wholesale Program,
              fill in and submit the form below. We will respond with your
              account request in the order it was received and look forward to
              serving your company.
            </p>
          </header>

          <form
            className="vcWholesale-application flex flex-col justify-center"
            onSubmit={e => {
              e.preventDefault();
              const form = e.target;
              const formData = new window.FormData(form);

              let name = formData.get("name");
              let company = formData.get("company");
              let email = formData.get("email");
              let phone = formData.get("phone");
              let website = formData.get("website");
              let license = formData.get("license");
              let title = formData.get("title");
              let message = formData.get("message");

              this.props.createAccount({
                name,
                company,
                email,
                phone,
                website,
                license
              });
            }}
          >
            <label htmlFor="vcName">Your Name*</label>
            <input
              type="text"
              id="vcName"
              name="name"
              placeholder="First and Last Name"
            />

            <label htmlFor="vcCompany">Company Name*</label>
            <input
              type="text"
              id="vcCompany"
              name="company"
              placeholder="Company Name"
            />

            <label htmlFor="vcEmail">Company Email*</label>
            <input
              type="text"
              id="vcEmail"
              name="email"
              placeholder="you@companyname.com"
            />

            <label htmlFor="vcPhone">Company Phone*</label>
            <input
              type="text"
              id="vcPhone"
              name="phone"
              placeholder="555-555-5555"
            />

            <label htmlFor="vcWebsite">Company Website*</label>
            <input
              type="text"
              id="vcWebsite"
              name="website"
              placeholder="www.yoursite.com"
            />

            <label htmlFor="vcLicense">Business License*</label>
            <input
              type="text"
              id="vcLicense"
              name="license"
              placeholder="#License"
            />

            <label htmlFor="vcMessageTitle">Message Title</label>
            <input
              type="text"
              id="vcMessageTitle"
              name="title"
              placeholder="Requesting Wholesale Account"
            />

            <label htmlFor="vcMessage">Tell Us About Your Company*</label>
            <textarea
              type="textarea"
              id="vcMessage"
              name="message"
              rows="10"
              placeholder="Any information that would be useful like how you heard about our wholesale program."
            />

            <input type="submit" value="Request Wholesale Account" />
          </form>
        </article>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createAccount: input => dispatch(actions.createAccount(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
