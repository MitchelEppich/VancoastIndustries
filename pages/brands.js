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
                    <div className="vcBrand-hero cks vcBg flex justify-center items-center">
                        <img src="../static/img/assets/cks-logo.png" alt="sunwest genetics" />
                    </div>

                    <div className="vcWholesale-content vcCompany-page">
                        <div className="vcWholesale-header flex flex-col justify-center items-center">
                            <h1 className="flex">Crop King Seeds</h1>
                            <h3 className="flex">World className Cannabis Seeds</h3>
                        </div>

                        <p className="wholesale-intro">
                            Crop King Seeds is one of the original seed companies dating back nearly a decade. While
                            helping make cannabis legal in Canada they help serve the cannabis community by providing
                            seeds to the world. From mixed bags, to high THC strains, to heavy indicas and CBD strains
                            Crop King Seeds carries strains of every genre.
                        </p>
                        <p className="wholesale-intro">
                            Based in Vancouver British Columbia, Crop King Seeds has over 35+ strains and is always
                            adding more. They continue to be a leader in supplying cannabis seeds in North America and
                            across the globe. Crop King Seeds is a recognizable brand that customers love.
                        </p>
                    </div>

                    <div className="vcWholesale-page">
                        <div id="vcProduct-filters">
                            <div className="vcFilter-list flex flex-col">
                                <h3>Brands</h3>
                                <label className="vcFilter-label">
                                    All
                                    <input type="checkbox" defaultChecked />
                                    <span className="checkmark" />
                                </label>

                                <label className="vcFilter-label">
                                    Crop King
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                </label>

                                <label className="vcFilter-label">
                                    Sonoma
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                </label>

                                <label className="vcFilter-label">
                                    Sunwest
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                </label>

                                <h3>Type</h3>
                                <label className="vcFilter-label">
                                    All
                                    <input type="checkbox" defaultChecked />
                                    <span className="checkmark" />
                                </label>

                                <label className="vcFilter-label">
                                    Hybrid
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                </label>

                                <label className="vcFilter-label">
                                    Indica
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                </label>

                                <label className="vcFilter-label">
                                    Sativa
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                </label>

                                <h3>Strain Kind</h3>
                                <label className="vcFilter-label">
                                    All
                                    <input type="checkbox" defaultChecked />
                                    <span className="checkmark" />
                                </label>

                                <label className="vcFilter-label">
                                    Autoflower
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                </label>

                                <label className="vcFilter-label">
                                    Feminized
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                </label>

                                <label className="vcFilter-label">
                                    CBD
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                </label>

                                <label className="vcFilter-label">
                                    Regular
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                </label>

                                <label className="vcFilter-label">
                                    Mixes
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                </label>
                            </div>

                            <div
                                className="vcFilters-tab flex flex-col justify-center items-center"
                                onclick="vancoastFilter()">
                                Filters
                                <img src="../static/img/assets/icons/sort-icon.svg" alt="" />
                            </div>
                        </div>

                        <div className="vcWholesale-content">
                            <ul className="vcProduct-list flex flex-row justify-center items-baseline">
                                <li className="vcProduct-item flex">
                                    <article>
                                        <a href="">
                                            <img src="../static/img/products/cks/cks-black-indica.png" alt="" />
                                        </a>
                                        <header className="vcProduct-info flex flex-col">
                                            <h2>
                                                <a href="">Black Indica</a>
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
                                            <img src="../static/img/products/cks/cks-cali-og.png" alt="" />
                                        </a>
                                        <header className="vcProduct-info flex flex-col">
                                            <h2>
                                                <a href="">Cali OG Kush Haze</a>
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
                                            src="../static/img/quick-view.svg"
                                            alt="quick view"
                                        />
                                    </a>
                                </div>

                                <div className="vcProduct-item flex">
                                    <article>
                                        <a href="">
                                            <img src="../static/img/products/cks/cks-early-miss.png" alt="" />
                                        </a>
                                        <header className="vcProduct-info flex flex-col">
                                            <h2>
                                                <a href="">Early Miss</a>
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
                                            <img src="../static/img/products/cks/cks-white-banner.png" alt="" />
                                        </a>
                                        <header className="vcProduct-info flex flex-col">
                                            <h2>
                                                <a href="">White Banner</a>
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
                                            <img src="../static/img/products/cks/cks-train-wreck.png" alt="" />
                                        </a>
                                        <header className="vcProduct-info flex flex-col">
                                            <h2>
                                                <a href="">Train Wreck</a>
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
                                            <img src="../static/img/products/cks/cks-cbdutch-treat.png" alt="" />
                                        </a>
                                        <header className="vcProduct-info flex flex-col">
                                            <h2>
                                                <a href="">CBD Dutch Treat</a>
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
                                            <img src="../static/img/products/cks/cks-revolver.png" alt="" />
                                        </a>
                                        <header className="vcProduct-info flex flex-col">
                                            <h2>
                                                <a href="">Revolver</a>
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
                            <div className="vcBrand-board vcBrand-board-sonoma flex flex-col lg:flex-row justify-between items-center">
                                <img src="../static/img/assets/sonoma-logo.png" alt="sonoma seeds" />
                                <p>
                                    Sonoma Seeds is one of the newest cannabis seed companies to come out of the gate
                                    with some of the best packaging in the industry, hard to find cannabis strains and
                                    roots on the West Coast.
                                </p>
                                <button>Sonoma Seeds</button>
                            </div>

                            <div className="vcBrand-board vcBrand-board-sunwest flex flex-col lg:flex-row justify-between items-center">
                                <img src="../static/img/assets/sunwest-logo.png" alt="sunwest genetics" />
                                <p>
                                    Sunwest Genetics is a premium cannabis seed supplier with carefully selected
                                    genetics. Ranging from potent sativas to heavy indicas, Sunwest carries a variety of
                                    quality cannabis strains.
                                </p>
                                <button>Sunwest Genetics</button>
                            </div>
                        </div>
                    </div>
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
