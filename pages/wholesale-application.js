import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";

import data from "../static/data";

class Index extends Component {
  render() {
    let countries = data.countries.map((country, index) => {
      return (
        <option key={index} value={country}>
          {country}
        </option>
      );
    });
    countries.unshift(
      <option key={countries.length}>Select Country...</option>
    );
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
              var object = {};
              formData.forEach((value, key) => {
                object[key] = value;
              });
              var json = object;
              let {
                name,
                surname,
                company,
                email,
                phone,
                website,
                license,
                address,
                apartment,
                city,
                postal,
                country,
                state,
                description,
                password
              } = json;
              if (apartment != null) apartment = apartment.toLowerCase();
              let _address = {
                name,
                surname,
                phone,
                postal,
                country,
                state,
                address,
                apartment,
                city
              };
              this.props.createAccount({
                company,
                email,
                website,
                license,
                address: _address,
                billing: [_address],
                shipping: [_address],
                description,
                password
              });
              form.reset();
            }}
          >
            <label htmlFor="vcName">Your First Name*</label>
            <input
              required
              type="text"
              id="vcNameFirst"
              name="name"
              placeholder="First Name"
            />

            <label htmlFor="vcName">Your Last Name*</label>
            <input
              required
              type="text"
              id="vcNameLast"
              name="surname"
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

            <label htmlFor="vcAddress">Address*</label>
            <input
              required
              type="text"
              id="vcAddress"
              name="address"
              placeholder="291 E. Hans Street"
            />

            <label htmlFor="vcApartment">Apartment</label>
            <input
              type="text"
              id="vcApartment"
              name="apartment"
              placeholder="#3210"
            />

            <label htmlFor="vcCity">City*</label>
            <input
              required
              type="text"
              id="vcCity"
              name="city"
              placeholder="Smith Ville"
            />

            <label htmlFor="vcState">Province/State*</label>
            <input
              required
              type="text"
              id="vcState"
              name="state"
              placeholder="British Columbia"
            />

            <label htmlFor="vcCountry">Country*</label>
            <select
              className="vcCountry"
              id="vcCountry"
              name="country"
              defaultValue=""
            >
              {countries}
            </select>

            <label htmlFor="vcPostal">Postal Code/Zip Code*</label>
            <input
              type="text"
              id="vcPostal"
              name="postal"
              placeholder="V5T 1J9"
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

            <input
              className={this.props.shop.animationActive ? "scaleAnim" : ""}
              type="submit"
              value="Request Wholesale Account"
              onClick={() => {
                this.props.toggleAnimation(true);
                setTimeout(() => this.props.toggleAnimation(false), 1000);
              }}
            />
          </form>
        </article>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createAccount: input => dispatch(actions.createAccount(input)),
    toggleAnimation: active => dispatch(actions.toggleAnimation(active))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
