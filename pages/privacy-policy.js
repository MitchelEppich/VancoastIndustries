import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";

class Index extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <div className="vcPage-hero flex justify-center vcBg vcPrivacy items-center" />

                    <article className="vcPage-content vcPrivacy">
                        <header>
                            <h1>Privacy Policy</h1>
                            <p>Outlined privacy policy for Vancoast Industries.</p>
                            <p>
                                <strong>
                                    Last Updated: <span>February 7th, 2019</span>
                                </strong>
                            </p>
                        </header>

                        <h3>Collection of Information</h3>
                        <p>
                            When utilizing our services at Vancoast Industries, some information is collected. This can
                            vary from information that you have voluntarily submitted to us (when creating an account or
                            placing an order) or information that is collected automatically (See "Log information"
                            below).
                        </p>

                        <ul className="vcPageList">
                            <li>
                                Usage Information: When using the services provided by Vancoast Industries, we collect
                                some information that is sent and received by your device.
                            </li>
                            <li>
                                Log Information: Log information includes the use of our website like browser types, IP
                                address, web requests, pages that you arrived from, exit pages, URLs, website
                                interactions, landing pages, viewed pages and other information provided by the browser.
                            </li>
                            <li>
                                Device Information: We may store some data on your device, like cookies, which uniquely
                                identifies your device.
                            </li>
                            <li>
                                Usage of Cookies: To tailor your shopping experience to you, our site uses cookies. This
                                is a small amount of data that is sent from our site and stored on your computer while
                                you are browsing. No personal information is collected during this process, but you can
                                turn this feature off by disabling cookies in the settings or preferences of your web
                                browser.
                            </li>
                        </ul>

                        <h3>Usage of Information</h3>
                        <p>
                            At Vancoast Industries we take your privacy seriously, and use sophisticated software to
                            keep your information safe. The information we collect is used solely for processing orders
                            and to provide a personalized shopping experience. Any other data (not used for orders) is
                            personally non-identifiable/anonymous. We have listed below examples of how that information
                            may be used:
                        </p>

                        <ul className="vcPageList">
                            <li>Improve Services to individual customers/users and groups of customers/users.</li>
                            <li>Improve information access to our customers/users thorugh our Services</li>
                            <li>Testing how well our Services perform.</li>
                            <li>Performing diagnostics for fixing technical issues or bugs.</li>
                            <li>For metrics to analyzer trends, performance, groups or patterns.</li>
                            <li>Detection and prevention of unauthorized activities or fraud.</li>
                            <li>Communications between you and Vancoast Industries</li>
                            <li>To implement any other purposes that the information was collected for.</li>
                        </ul>

                        <h3>Sharing of Voluntary Information</h3>
                        <p>
                            When you are ready to apply for wholesale purchasing, and to subsequently purchase seeds, we
                            ask for personal information. Vancoast keeps an internal record of this information, as well
                            as a record of your product purchases. While you choose whether or not to provide this
                            information, without it we may not be able to process your order or accept your application.{" "}
                            <strong>We will never share this information outside of our company.</strong>
                        </p>

                        <p>
                            If you have any questions regarding our privacy policy you can contact us through our{" "}
                            <a href="./contact.html">Contact</a> page and we will repsond as soon as possible.
                        </p>

                        <h3>Changes to our Privacy Policy</h3>
                        <p>
                            This privacy policy is subject to change. If changes are made, they are reflected/indicated
                            by the 'Last Updated' section at the top of this page.
                        </p>
                    </article>
                </div>
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
