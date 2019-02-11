import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";

class Index extends Component {
    render() {
        return (
            <Layout>
                <div className="vcPage-hero flex justify-center vcBg vcContact items-center" />

                <article className="vcPage-content vcContact">
                    <header>
                        <h1>Contact Us</h1>
                        <p>
                            If you have questions about our wholesale program or would like to contact us for any other
                            reason please fill out the form below and we will get back to you as soon as possible.
                        </p>
                    </header>

                    <form className="vcWholesale-application flex flex-col justify-center">
                        <label for="vcName">Your Name*</label>
                        <input type="text" id="vcName" placeholder="First and Last Name" />

                        <label for="vcEmail">Your Email*</label>
                        <input type="text" id="vcEmail" placeholder="you@emailaddress.com" />

                        <label for="vcPhone">Company Phone</label>
                        <input type="text" id="vcPhone" placeholder="555-555-5555" />

                        <label for="vcMessageTitle">Message Title*</label>
                        <input type="text" id="vcMessageTitle" placeholder="Reason for Contacting" />

                        <label for="vcMessage">Your Message*</label>
                        <textarea
                            type="textarea"
                            id="vcMessage"
                            rows="10"
                            placeholder="Ask us what youd like to know."
                        />

                        <input type="submit" value="Send" />
                    </form>
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
