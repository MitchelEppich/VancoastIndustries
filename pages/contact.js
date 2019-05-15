import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";

class Index extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="vcPage-hero flex justify-center vcBg vcContact items-center" />

        <article className="vcPage-content vcContact">
          <header>
            <h1>Contact Us</h1>
            <p>
              If you have questions about our wholesale program or would like to
              contact us for any other reason please fill out the form below and
              we will get back to you as soon as possible.
            </p>
          </header>

          <form
            onSubmit={e => {
              e.preventDefault();
              const form = e.target;
              const formData = new window.FormData(form);
              var object = {};
              formData.forEach((value, key) => {
                object[key] = value;
              });
              var json = JSON.stringify(object);
              console.log(json);

              form.reset();
            }}
            className="vcWholesale-application flex flex-col justify-center"
          >
            <label htmlFor="vcName">Your Name*</label>
            <input
              type="text"
              id="vcName"
              name="name"
              required
              placeholder="First and Last Name"
            />

            <label htmlFor="vcEmail">Your Email*</label>
            <input
              type="text"
              id="vcEmail"
              name="email"
              required
              placeholder="you@emailaddress.com"
            />

            <label htmlFor="vcPhone">Company Phone</label>
            <input
              type="text"
              id="vcPhone"
              name="phone"
              placeholder="555-555-5555"
            />

            <label htmlFor="vcMessageTitle">Message Title*</label>
            <input
              type="text"
              id="vcMessageTitle"
              name="subject"
              required
              placeholder="Reason for Contacting"
            />

            <label htmlFor="vcMessage">Your Message*</label>
            <textarea
              type="textarea"
              id="vcMessage"
              name="message"
              rows="10"
              required
              placeholder="Ask us what youd like to know."
            />

            <input
              type="submit"
              value="Send"
              className={this.props.shop.animationActive ? "scaleAnim" : ""}
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
    toggleAnimation: active => dispatch(actions.toggleAnimation(active))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
