import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";

class Index extends Component {
    render() {
        return (
            <Layout>
                <article className="vcPage-content vcCheckout">
                    <header>
                        <h1>Checkout</h1>
                        <div className="vcProgressbar flex">
                            <ul>
                                <li className="complete">
                                    <a href="">Cart</a>
                                </li>
                                <li className="complete">
                                    <a href="">Billing</a>
                                </li>
                                <li className="complete">
                                    <a href="">Shipping</a>
                                </li>
                                <li className="active">
                                    <a href="">Checkout</a>
                                </li>
                                <li>
                                    <a href="">Confirmation</a>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <div className="vcBill-ship flex flex-row">
                        <div className="vcShipping-details">
                            <h2>Delivery Details</h2>

                            <div>
                                <span className="vcShipping-name">Name</span>
                            </div>

                            <div>
                                <span className="vcShipping-coName">The Co.</span>
                            </div>

                            <div>
                                <span className="vcShipping-eMail">person@theco.com</span>
                            </div>

                            <div>
                                <span className="vcShipping-street">the street ave</span>
                            </div>

                            <div>
                                <span className="vcShipping-city">City of Cities,</span>{" "}
                                <span className="vcShipping-province">British Columbia</span>
                            </div>

                            <div>
                                <span className="vcShipping-country">Canada,</span>{" "}
                                <span className="vcShipping-code">V5T1J5</span>
                            </div>

                            <div>
                                <span className="vcShipping-phone">1800.555.5555</span>
                            </div>
                        </div>

                        <div className="vcBilling-details flex flex-col justify-center">
                            <h2>Billing Details</h2>

                            <div>
                                <span className="vcShipping-name">First Name</span>{" "}
                                <span className="vcShipping-lName">Last Name</span>
                            </div>

                            <div>
                                <span className="vcShipping-coName">The Co.</span>
                            </div>

                            <div>
                                <span className="vcShipping-eMail">person@theco.com</span>
                            </div>

                            <div>
                                <span className="vcShipping-street">the street ave</span>
                            </div>

                            <div>
                                <span className="vcShipping-city">City of Cities,</span>{" "}
                                <span className="vcShipping-province">British Columbia</span>
                            </div>

                            <div>
                                <span className="vcShipping-country">Canada,</span>{" "}
                                <span className="vcShipping-code">V5T1J5</span>
                            </div>

                            <div>
                                <span className="vcShipping-phone">1800.555.5555</span>
                            </div>
                        </div>
                    </div>

                    <div className="vcCheckout-content flex flex-col justify-around">
                        <div className="vcSummary">
                            <h2>Cart Summary</h2>

                            <ul className="vcCheckout-list flex justify-start">
                                <li className="vcItem vcItem-one flex items-end">
                                    <img src="img/products/sonoma/so-bruce-banner.jpg" alt="bruce banner" />

                                    <div className="vcItem-info flex flex-col justify-around items-start">
                                        <h2>Bruce Banner</h2>
                                        <h3 className="vcCheckout-cat">Indica</h3>
                                        <div className="vcItem-brand">
                                            <span>Brand -</span>
                                            Sonoma Seeds
                                        </div>

                                        <div className="vcItem-details flex flex-row justify-start">
                                            <div className="vcItem-qty flex flex-col">
                                                <span className="vcPrefix">QTY.</span>
                                                <span>x3</span>
                                            </div>

                                            <div className="vcItem-price flex flex-col">
                                                <span className="vcPrefix">Price</span>
                                                <span>$155</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="vcItem vcItem-two flex items-end">
                                    <img src="img/products/cks/cks-lambs-breath.png" alt="lambs breath" />

                                    <div className="vcItem-info flex flex-col justify-around items-start">
                                        <h2>Lambs Breath</h2>
                                        <h3 className="vcCheckout-cat">Sativa</h3>
                                        <div className="vcItem-brand">
                                            <span>Brand -</span>
                                            Crop King Seeds
                                        </div>

                                        <div className="vcItem-details flex flex-row justify-start">
                                            <div className="vcItem-qty flex flex-col">
                                                <span className="vcPrefix">QTY.</span>
                                                <span>x3</span>
                                            </div>

                                            <div className="vcItem-price flex flex-col">
                                                <span className="vcPrefix">Price</span>
                                                <span>$155</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="vcItem vcItem-three flex items-end">
                                    <img src="img/products/sunwest/sw-purple-kush.png" alt="purple kush" />

                                    <div className="vcItem-info flex flex-col justify-around items-start">
                                        <h2>Purple Kush</h2>
                                        <h3 className="vcCheckout-cat">Indica</h3>
                                        <div className="vcItem-brand">
                                            <span>Brand -</span>
                                            Sunwest Genetics
                                        </div>

                                        <div className="vcItem-details flex flex-row justify-start">
                                            <div className="vcItem-qty flex flex-col">
                                                <span className="vcPrefix">QTY.</span>
                                                <span>x3</span>
                                            </div>

                                            <div className="vcItem-price flex flex-col">
                                                <span className="vcPrefix">Price</span>
                                                <span>$155</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="vcItem vcItem-four flex items-end">
                                    <img src="img/products/sonoma/so-northern-berry.jpg" alt="northern berry" />

                                    <div className="vcItem-info flex flex-col justify-around items-start">
                                        <h2>Northern Berry</h2>
                                        <h3 className="vcCheckout-cat">Indica</h3>
                                        <div className="vcItem-brand">
                                            <span>Brand -</span>
                                            Sonoma Seeds
                                        </div>

                                        <div className="vcItem-details flex flex-row justify-start">
                                            <div className="vcItem-qty flex flex-col">
                                                <span className="vcPrefix">QTY.</span>
                                                <span>x3</span>
                                            </div>

                                            <div className="vcItem-price flex flex-col">
                                                <span className="vcPrefix">Price</span>
                                                <span>$155</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="vcItem vcItem-five flex items-end">
                                    <img src="img/products/sonoma/so-la-confidential.jpg" alt="northern berry" />

                                    <div className="vcItem-info flex flex-col justify-around items-start">
                                        <h2>LA Confidential</h2>
                                        <h3 className="vcCheckout-cat">Sativa</h3>
                                        <div className="vcItem-brand">
                                            <span>Brand -</span>
                                            Sonoma Seeds
                                        </div>

                                        <div className="vcItem-details flex flex-row justify-start">
                                            <div className="vcItem-qty flex flex-col">
                                                <span className="vcPrefix">QTY.</span>
                                                <span>x3</span>
                                            </div>

                                            <div className="vcItem-price flex flex-col">
                                                <span className="vcPrefix">Price</span>
                                                <span>$155</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="vcCheckout-totals flex flex-col justify-around items-center">
                            <div className="vcCheckout-subtotal">
                                Subtotal: <span>$260</span>
                            </div>

                            <div className="vcCheckout-taxes">
                                Taxes: <span>$450</span>
                            </div>

                            <div className="vcCheckout-total">
                                Total: <span>$305</span>
                            </div>
                        </div>
                    </div>

                    <div className="vcPayment-method">
                        <h2>Payment Method</h2>

                        <div className="vcPayment-choices flex flex-row justify-around items-center">
                            <input type="radio" checked="checked" id="CashMoney" name="radio" />
                            <label className="vcCashMoney flex flex-col" for="CashMoney">
                                <span>Cash</span>
                            </label>

                            <input type="radio" id="Crypto" name="radio" />
                            <label className="vcCrypto flex flex-col" for="Crypto">
                                <span>Crypto Currency</span>
                            </label>

                            <input type="radio" id="MoneyTransfer" name="radio" />
                            <label className="vcMoneyTransfer flex flex-col" for="MoneyTransfer">
                                <span>Money Transfer</span>
                            </label>

                            <input type="radio" id="CreditCard" name="radio" />
                            <label className="vcCreditCard flex flex-col" for="CreditCard">
                                <span>Credit Card</span>
                            </label>
                        </div>

                        <div className="vcPayment-ccInput flex flex-col items-start">
                            <label for="ccName">Name On Card</label>
                            <input type="text" id="ccName" />

                            <label for="ccName">Card Number</label>
                            <input type="text" id="ccName" />

                            <div className="vcCardinfo flex flex-row justify-between items-center">
                                <span className="vcCardExpiry flex flex-col">
                                    <label for="ccExpiry">Expiry Date</label>
                                    <input type="text" id="ccDate" />
                                </span>

                                <span className="vcCardCCV flex flex-col">
                                    <label for="ccv">CCV</label>
                                    <input type="text" id="ccv" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <input type="submit" className="vcCheckout-btn" value="Place Order" />
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
