import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Router from "next/router";
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
            <div className="w-full inline-flex">
              <label htmlFor="vcName" className="w-1/2 mx-1">
                Your First Name*
                <input
                  required
                  type="text"
                  className="w-full"
                  id="vcNameFirst"
                  name="name"
                  placeholder="First Name"
                />
              </label>
              <label htmlFor="vcName" className="w-1/2 mx-1">
                Your Last Name*
                <input
                  required
                  type="text"
                  className="w-full"
                  id="vcNameLast"
                  name="surname"
                  placeholder="Last Name"
                />{" "}
              </label>{" "}
            </div>

            <div className="w-full inline-flex">
              <label htmlFor="vcCompany" className="w-1/2 mx-1">
                Company Name*
                <input
                  required
                  type="text"
                  id="vcCompany"
                  name="company"
                  className="w-full"
                  placeholder="Company Name"
                />
              </label>

              <label htmlFor="vcEmail" className="w-1/2 mx-1">
                Company Email*
                <input
                  required
                  type="text"
                  id="vcEmail"
                  name="email"
                  className="w-full"
                  placeholder="you@companyname.com"
                />
              </label>
            </div>
            <div className="w-full inline-flex">
              <label htmlFor="vcPassword" className="w-1/2 mx-1">
                Account Password*
                <input
                  required
                  type="password"
                  id="vcPassword"
                  name="password"
                  className="w-full"
                  placeholder="Password"
                />
              </label>

              <label htmlFor="vcPassword" className="w-1/2 mx-1">
                Confirm Account Password*
                <input
                  required
                  type="password"
                  id="vcPasswordConfirm"
                  name="passwordConfirm"
                  className="w-full"
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
              </label>
            </div>

            <div className="w-full inline-flex">
              <label htmlFor="vcPhone" className="w-1/3 mx-1">
                Company Phone*
                <input
                  required
                  type="text"
                  id="vcPhone"
                  className="w-full"
                  name="phone"
                  placeholder="555-555-5555"
                />
              </label>

              <label htmlFor="vcWebsite" className="w-1/3 mx-1">
                Company Website*
                <input
                  required
                  type="text"
                  id="vcWebsite"
                  className="w-full"
                  name="website"
                  placeholder="www.yoursite.com"
                />
              </label>

              <label htmlFor="vcLicense" className="w-1/3 mx-1">
                Business License*
                <input
                  required
                  type="text"
                  id="vcLicense"
                  className="w-full"
                  name="license"
                  placeholder="#License"
                />
              </label>
            </div>
            <div className="w-full inline-flex">
              <label htmlFor="vcAddress" className="w-1/3 mx-1">
                Address*
                <input
                  required
                  type="text"
                  id="vcAddress"
                  className="w-full"
                  name="address"
                  placeholder="291 E. Hans Street"
                />
              </label>

              <label htmlFor="vcApartment" className="w-1/3 mx-1">
                Apartment
                <input
                  type="text"
                  id="vcApartment"
                  name="apartment"
                  className="w-full"
                  placeholder="#3210"
                />
              </label>
              <label htmlFor="vcPostal" className="w-1/3 mx-1">
                Postal Code/Zip Code*
                <input
                  type="text"
                  id="vcPostal"
                  name="postal"
                  className="w-full"
                  placeholder="V5T 1J9"
                />
              </label>
            </div>
            <div className="w-full inline-flex">
              <label htmlFor="vcCity" className="w-1/3 mx-1">
                City*
                <input
                  required
                  type="text"
                  className="w-full"
                  id="vcCity"
                  name="city"
                  placeholder="Smith Ville"
                />
              </label>

              <label htmlFor="vcState" className="w-1/3 mx-1">
                Province/State*
                <input
                  required
                  type="text"
                  className="w-full"
                  id="vcState"
                  name="state"
                  placeholder="British Columbia"
                />
              </label>

              <label htmlFor="vcCountry" className="w-1/3 mx-1">
                Country*
                <select
                  className="vcCountry"
                  id="vcCountry"
                  className="w-full"
                  name="country"
                  defaultValue=""
                >
                  {countries}
                </select>{" "}
              </label>
            </div>

            <label htmlFor="vcMessage" className="w-full mx-1">
              Tell Us About Your Company*
            </label>
            <textarea
              required
              type="textarea"
              id="vcMessage"
              name="description"
              className="w-full mr-2 pr-3"
              rows="10"
              placeholder="Any information that would be useful like how you heard about our wholesale program."
            />

            <input
              className={this.props.shop.animationActive ? "scaleAnim" : ""}
              type="submit"
              value="Submit"
              onClick={() => {
                this.props.toggleAnimation(true);
                setTimeout(() => this.props.toggleAnimation(false), 1000);
                Router.push("/");
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
