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

              let name = (
                formData.get("firstName") +
                " " +
                formData.get("lastName")
              ).toLowerCase();
              let company = formData.get("company").toLowerCase();
              let email = formData.get("email").toLowerCase();
              let phone = formData.get("phone");
              let website = formData.get("website").toLowerCase();
              let license = formData.get("license");
              let address = formData.get("address").toLowerCase();
              let description = formData.get("description");
              let password = formData.get("password");
              let passwordConfirm = formData.get("passwordConfirm");

              this.props.createAccount({
                name,
                company,
                email,
                phone,
                website,
                license,
                address,
                description,
                password
              });
            }}
          >
            <label htmlFor="vcName">Your First Name*</label>
            <input
              required
              type="text"
              id="vcName"
              name="firstName"
              placeholder="First Name"
            />

            <label htmlFor="vcName">Your Last Name*</label>
            <input
              required
              type="text"
              id="vcName"
              name="lastName"
              placeholder="Last Name"
            />

            <label htmlFor="vcCompany">Company Name*</label>
            <input
              required
              type="text"
              id="vcCompany"
              name="company"
              placeholder="Company Name"
            />

            <label htmlFor="vcEmail">Company Email*</label>
            <input
              required
              type="text"
              id="vcEmail"
              name="email"
              placeholder="you@companyname.com"
            />

            <label htmlFor="vcPassword">Account Password*</label>
            <input
              required
              type="password"
              id="vcPassword"
              name="password"
              placeholder="Password"
            />

            <label htmlFor="vcPassword">Confirm Account Password*</label>
            <input
              required
              type="password"
              id="vcPasswordConfirm"
              name="passwordConfirm"
              placeholder="Retype Password"
              onChange={e => {
                let value = e.target.value;
                let other = document.querySelector("#vcPassword").value;
                if (value != other)
                  e.target.setCustomValidity(
                    "Passwords do not match each other"
                  );
                else e.target.setCustomValidity("");
              }}
            />

            <label htmlFor="vcPhone">Company Phone*</label>
            <input
              required
              type="text"
              id="vcPhone"
              name="phone"
              placeholder="555-555-5555"
            />

            <label htmlFor="vcWebsite">Company Website*</label>
            <input
              required
              type="text"
              id="vcWebsite"
              name="website"
              placeholder="www.yoursite.com"
            />

            <label htmlFor="vcLicense">Business License*</label>
            <input
              required
              type="text"
              id="vcLicense"
              name="license"
              placeholder="#License"
            />

            <label htmlFor="vcAddress">Business Address*</label>
            <input
              required
              type="text"
              id="vcAddress"
              name="address"
              placeholder="Street Address"
            />

            <label htmlFor="vcMessage">Tell Us About Your Company*</label>
            <textarea
              required
              type="textarea"
              id="vcMessage"
              name="description"
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
