import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Link from "next/link";

class Index extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <div className="vc-hero vcBg flex flex-col justify-center items-center">
                        <img src="../static/img/assets/vc-full-logo.png" alt="vancoast industries stamp" />
                        <h1>Wholesale Cannabis Seeds</h1>
                    </div>
                    <div className="vcWrap">
                        <div className="vcBrand-section container-col items-center">
                            <div className="vcBrand-text flex flex-col items-center">
                                <h3>Cannabis Brands</h3>
                                <h2>Our Companies</h2>
                                <p>Only the best cannabis seeds in the world</p>
                            </div>

                            <div className="vcBrand-slider flex flex-row justify-around items-center">
                                <div className="vcSlide-one flex">
                                    <Link prefetch href="/shop">
                                        <a>
                                            <img src="../static/img/assets/sonoma-logo.png" alt="sonoma seeds brand" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="vcSlide-two flex">
                                    <Link prefetch href="/shop">
                                        <a>
                                            <img src="../static/img/assets/sunwest-logo.png" alt="sunwest brand card" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="vcSlide-three flex">
                                    <Link prefetch href="/shop">
                                        <a>
                                            <img src="../static/img/assets/cks-logo.png" alt="cks brand card" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="vcBrand-dir" />
                            <a href="" />
                            <a href="" />
                        </div>

                        <div className="vcShop-section">
                            <h2>
                                <span className="vcShop-shop">Shop</span>{" "}
                                <span className="vcShop-strains">Cannabis Strains</span>
                            </h2>
                            <div className="vcShop-bg">
                                <div className="vcShop-wrap flex justify-center">
                                    <div className="vcShop-box flex justify-center items-center">
                                        <img src="../static/img/products/sonoma/so-auto-critical.jpg" alt="" />
                                    </div>
                                    <div className="vcShop-box flex justify-center items-center">
                                        <img src="../static/img/products/sonoma/so-blueberry.jpg" alt="" />
                                    </div>
                                    <div className="vcShop-box flex justify-center items-center">
                                        <img src="../static/img/products/sunwest/sw-jack-herer.png" alt="" />
                                    </div>
                                    <div className="vcShop-box flex justify-center items-center">
                                        <img src="../static/img/products/sunwest/sw-girl-scout-cookies.png" alt="" />
                                    </div>
                                    <div className="vcShop-box flex justify-center items-center">
                                        <img src="../static/img/products/sonoma/so-ak47.jpg" alt="" />
                                    </div>
                                    <div className="vcShop-box flex justify-center items-center">
                                        <img src="../static/img/products/cks/cks-afghani.png" alt="" />
                                    </div>
                                    <div className="vcShop-box flex justify-center items-center">
                                        <img src="../static/img/products/cks/cks-dwarf.png" alt="" />
                                    </div>
                                    <div className="vcShop-box flex justify-center items-center">
                                        <img src="../static/img/products/sonoma/so-bruce-banner.jpg" alt="" />
                                    </div>
                                    <div className="vcShop-box flex justify-center items-center">
                                        <img src="../static/img/products/cks/cks-sativa-star.png" alt="" />
                                    </div>
                                    <div className="vcShop-box flex justify-center items-center">
                                        <img src="../static/img/products/sonoma/so-bubblegum.jpg" alt="" />
                                    </div>
                                    <div className="vcShop-box flex justify-center items-center">
                                        <img src="../static/img/products/sunwest/sw-blue-dream.png" alt="" />
                                    </div>
                                    <div className="vcShop-box flex justify-center items-center">
                                        <img src="../static/img/products/sunwest/sw-purple-kush.png" alt="" />
                                    </div>
                                    <div className="vcShop-box flex justify-center items-center">
                                        <img src="../static/img/products/sonoma/so-strawberry-cough.jpg" alt="" />
                                    </div>
                                </div>

                                <div className="vcShop-btns flex flex-row justify-center">
                                    <Link prefetch href="/">
                                        <button className="vcShop-all">View All</button>
                                    </Link>
                                </div>
                            </div>

                            <div className="vcAbout-section flex flex-col items-center">
                                <h2 className="flex flex-col">
                                    <span className="vcAbout-text">About</span>
                                    <span className="vcAbout-van">Vancoast</span>
                                    <span className="vcAbout-ind">Industries</span>
                                </h2>

                                <p className="vcAbout-slogan">"Company Slogan Goes Here"</p>

                                <div className="vcAbout-images flex justify-around items-center flex-row">
                                    <div className="vcAbout-imgOne">
                                        <img src="../static/img/assets/vc-about-fire.jpg" alt="" />
                                    </div>
                                    <div className="vcAbout-imgTwo">
                                        <img src="../static/img/assets/vc-about-cannabis.jpg" alt="" />
                                    </div>
                                    <div className="vcAbout-imgThree">
                                        <img src="../static/img/assets/vc-about-forest.jpg" alt="" />
                                    </div>
                                </div>

                                <p className="vcAbout-excerpt">
                                    Vancoast Industries is Canada's leading supplier of wholesale cannabis seeds. We aim
                                    to supply our customers with the best cannabis seed brands that their customers will
                                    enjoy and keep coming back for more.
                                </p>

                                <Link prefetch href="/about">
                                    <button>Read About</button>
                                </Link>
                            </div>

                            <div className="vcSpecials-section flex flex-col justify-center items-center">
                                <h2 className="flex flex-col justify-center">
                                    <span>Limited Time</span> Specials
                                </h2>

                                <div className="vcSpecials-wrap flex flex-col lg:flex-row justify-around items-center">
                                    <div className="vcSpecials-product">
                                        <div className="vcSpecials-img">
                                            <a href="">
                                                <img src="../static/img/products/sonoma/so-northern-berry.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="vcSpecials-info">
                                            <h3>Northern Berry</h3>
                                            <p className="vcSpecials-price">
                                                from <span>$135</span>
                                            </p>
                                            <p className="vcSpecials-cat">INDICA</p>
                                        </div>
                                    </div>

                                    <div className="vcSpecials-product">
                                        <div className="vcSpecials-img">
                                            <a href="">
                                                <img src="../static/img/products/sunwest/sw-purple-kush.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="vcSpecials-info">
                                            <h3>Purple Kush</h3>
                                            <p className="vcSpecials-price">
                                                from <span>$55</span>
                                            </p>
                                            <p className="vcSpecials-cat">INDICA</p>
                                        </div>
                                    </div>

                                    <div className="vcSpecials-product">
                                        <div className="vcSpecials-img">
                                            <a href="">
                                                <img src="../static/img/products/cks/cks-lambs-breath.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="vcSpecials-info">
                                            <h3>Lambs Breath</h3>
                                            <p className="vcSpecials-price">
                                                from <span>$35</span>
                                            </p>
                                            <p className="vcSpecials-cat">SATIVA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vcSomething-section flex flex-col items-center">
                            <h2>Ready to Get Started?</h2>
                            <p>
                                If your ready to start stocking your store with the worlds best cannabis seeds and start
                                increasing your revenue, simply fill out the{" "}
                                <Link prefetch href="/wholesale-application">
                                    <a>Wholesale Application</a>
                                </Link>{" "}
                                and Vanessa will contact you with your login details once approved.
                                <br />
                                <br />
                                Thank you for choosing Vancoast Industries.
                            </p>
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
