import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Filters from "../components/shop/filters";
import Heading from "../components/shop/heading";

class Index extends Component {
    render() {
        return (
            <Layout>
                <div
                    className={
                        this.props.shop.activeBrandIndex == 0
                            ? "vcWholesale-hero vcBg flex justify-center items-center"
                            : "vcBrand-hero vcBg flex justify-center items-center " +
                              this.props.shop.brands[this.props.shop.activeBrandIndex].bgImageClass
                    }>
                    {this.props.shop.activeBrandIndex != 0 ? (
                        <img
                            src={this.props.shop.brands[this.props.shop.activeBrandIndex].logo}
                            alt={this.props.shop.brands[this.props.shop.activeBrandIndex].name}
                        />
                    ) : null}
                </div>

                <Heading {...this.props} />

                <div className="vcWholesale-page">
                    <Filters {...this.props} />

                    <div className="vcWholesale-content">
                        <ul className="vcProduct-list flex flex-row justify-center items-baseline">
                            <li className="vcProduct-item flex">
                                <article>
                                    <a href="">
                                        <img src="../static/img/products/sonoma/so-northern-berry.jpg" alt="" />
                                    </a>
                                    <header className="vcProduct-info flex flex-col">
                                        <h2>
                                            <a href="">Northern Berry</a>
                                        </h2>
                                        <div className="vcProduct-info flex flex-row justify-between">
                                            <h3 className="vcProduct-cat">Indica</h3>
                                            <p className="vcProduct-price">from $25</p>
                                        </div>
                                    </header>
                                </article>
                            </li>

                            <div className="vcProduct-item flex">
                                <article>
                                    <a href="">
                                        <img src="../static/img/products/cks/cks-lambs-breath.png" alt="" />
                                    </a>
                                    <header className="vcProduct-info flex flex-col">
                                        <h2>
                                            <a href="">Lambs Breath</a>
                                        </h2>
                                        <div className="vcProduct-info flex flex-row justify-between">
                                            <h3 className="vcProduct-cat">Indica</h3>
                                            <p className="vcProduct-price">from $25</p>
                                        </div>
                                    </header>
                                </article>
                                <a href="">
                                    <img
                                        className="quick-view"
                                        title="quick view"
                                        src="../static/img/assets/icons/quick-view.svg"
                                        alt="quick view"
                                    />
                                </a>
                            </div>

                            <div className="vcProduct-item flex">
                                <article>
                                    <a href="">
                                        <img src="../static/img/products/sonoma/so-blueberry.jpg" alt="" />
                                    </a>
                                    <header className="vcProduct-info flex flex-col">
                                        <h2>
                                            <a href="">BlueBerry</a>
                                        </h2>
                                        <div className="vcProduct-info flex flex-row justify-between">
                                            <h3 className="vcProduct-cat">Indica</h3>
                                            <p className="vcProduct-price">from $25</p>
                                        </div>
                                    </header>
                                </article>
                            </div>

                            <div className="vcProduct-item flex">
                                <article>
                                    <a href="">
                                        <img src="../static/img/products/sonoma/so-bruce-banner.jpg" alt="" />
                                    </a>
                                    <header className="vcProduct-info flex flex-col">
                                        <h2>
                                            <a href="">Bruce Banner</a>
                                        </h2>
                                        <div className="vcProduct-info flex flex-row justify-between">
                                            <h3 className="vcProduct-cat">Indica</h3>
                                            <p className="vcProduct-price">from $25</p>
                                        </div>
                                    </header>
                                </article>
                            </div>

                            <div className="vcProduct-item flex">
                                <article>
                                    <a href="">
                                        <img src="../static/img/products/sonoma/so-cali-kush.jpg" alt="" />
                                    </a>
                                    <header className="vcProduct-info flex flex-col">
                                        <h2>
                                            <a href="">Cali Kush</a>
                                        </h2>
                                        <div className="vcProduct-info flex flex-row justify-between">
                                            <h3 className="vcProduct-cat">Indica</h3>
                                            <p className="vcProduct-price">from $25</p>
                                        </div>
                                    </header>
                                </article>
                            </div>

                            <div className="vcProduct-item flex">
                                <article>
                                    <a href="">
                                        <img src="../static/img/products/sonoma/so-chocolope.jpg" alt="" />
                                    </a>
                                    <header className="vcProduct-info flex flex-col">
                                        <h2>
                                            <a href="">Chocolope</a>
                                        </h2>
                                        <div className="vcProduct-info flex flex-row justify-between">
                                            <h3 className="vcProduct-cat">Indica</h3>
                                            <p className="vcProduct-price">from $25</p>
                                        </div>
                                    </header>
                                </article>
                            </div>

                            <div className="vcProduct-item flex">
                                <article>
                                    <a href="">
                                        <img src="../static/img/products/sonoma/so-cream-caramel.jpg" alt="" />
                                    </a>
                                    <header className="vcProduct-info flex flex-col">
                                        <h2>
                                            <a href="">Cream Caramel</a>
                                        </h2>
                                        <div className="vcProduct-info flex flex-row justify-between">
                                            <h3 className="vcProduct-cat">Indica</h3>
                                            <p className="vcProduct-price">from $25</p>
                                        </div>
                                    </header>
                                </article>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className="vcWholesale-content">
                    <div className="vcBrand-boards flex flex-col">
                        <div className="vcBrand-board vcBrand-board-cks flex flex-col lg:flex-row justify-between items-center">
                            <img src="../static/img/assets/cks-logo.png" alt="crop king seeds" />
                            <p>
                                Crop King Seeds is one of the oldest cannabis seed suppliers and now has over 35 strains
                                and counting. Check out their large selection of seeds all made available for wholesale
                                sized orders through Vancoast Industries.
                            </p>
                            <button
                                onClick={() => {
                                    this.props.setBrandIndex(1);
                                    window.scrollTo(0, 0);
                                }}>
                                Crop King Seeds
                            </button>
                        </div>

                        <div className="vcBrand-board vcBrand-board-sunwest flex flex-col lg:flex-row justify-between items-center">
                            <img src="../static/img/assets/sunwest-logo.png" alt="sunwest genetics" />
                            <p>
                                Sunwest Genetics is a premium cannabis seed supplier with carefully selected genetics.
                                Ranging from potent sativas to heavy indicas, Sunwest carries a variety of quality
                                cannabis strains.
                            </p>
                            <button
                                onClick={() => {
                                    this.props.setBrandIndex(2);
                                    window.scrollTo(0, 0);
                                }}>
                                Sunwest Genetics
                            </button>
                        </div>
                        <div className="vcBrand-board vcBrand-board-sonoma flex flex-col lg:flex-row justify-between items-center">
                            <img src="../static/img/assets/sonoma-logo.png" alt="sonoma seeds" />
                            <p>
                                Sonoma Seeds is one of the newest cannabis seed companies to come out of the gate with
                                some of the best packaging in the industry, hard to find cannabis strains and roots on
                                the West Coast.
                            </p>
                            <button
                                onClick={() => {
                                    this.props.setBrandIndex(3);
                                    window.scrollTo(0, 0);
                                }}>
                                Sonoma Seeds
                            </button>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleFilters: isFilterVisible => dispatch(actions.toggleFilters(isFilterVisible)),
        setBrandIndex: index => dispatch(actions.setBrandIndex(index))
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(withData(Index));
