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
                    <div className="vcWholesale-hero vcBg flex justify-center items-center" />

                    <div className="vcWholesale-content">
                        <div className="vcWholesale-header flex flex-col justify-center items-center">
                            <h1 className="flex flex-col">
                                Wholesale <span>Cannabis Seed Shop</span>
                            </h1>
                            <h3 className="flex">Load Up Your Box</h3>
                        </div>

                        <p className="wholesale-intro">
                            Welcome to the world's number one source for wholesale cannabis seeds. Vancoast Industries
                            carries only the best seed brands ensuring you get the best quality cannabis genetics. From
                            fresh, modern brands like Sonoma Seeds and global industry leaders like Crop King Seeds your
                            bound to find dozens of strains that your customers have been looking for.
                        </p>
                        <p className="wholesale-intro">
                            By partnering with Vancoast Indutries, you'll be able to buy wholesale cannabis seeds from a
                            variety of brands all in the same order and ready to stock on your store shelves. With our
                            simple re-ordering system and account dashboard, you'll have access to all the tools your
                            need to always keep your store stocked.
                        </p>
                    </div>

                    <div className="vcWholesale-page">
                        <div id="vcProduct-filters" className={this.props.shop.showFilters ? "showFilters" : ""}>
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
                                onClick={() => this.props.toggleFilters(!this.props.shop.showFilters)}
                                className="vcFilters-tab flex flex-col justify-center items-center">
                                Filters
                                <img src="../static/img/assets/icons/sort-icon.svg" alt="" />
                            </div>
                        </div>

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
                                    Crop King Seeds is one of the oldest cannabis seed suppliers and now has over 35
                                    strains and counting. Check out their large selection of seeds all made available
                                    for wholesale sized orders through Vancoast Industries.
                                </p>
                                <button>Crop King Seeds</button>
                            </div>

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
    return {
        toggleFilters: bool => dispatch(actions.toggleFilters(bool))
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(withData(Index));
