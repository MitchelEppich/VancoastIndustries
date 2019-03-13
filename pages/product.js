import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";

class Index extends Component {
  render() {
    return (
      <Layout>
        <div
          className={
            "vcBrand-hero flex justify-center items-start " +
            this.props.shop.brands[this.props.shop.activeBrandIndex]
              .bgImageClass
          }
        />

        <article>
          <div className="vcSingle vcWholesale-content flex flex-col lg:flex-row justify-center items-center">
            <div className="vcSingle-sectionOne flex items-start">
              <img
                className="vcBrand-logo"
                src="../static/img/assets/sonoma-logo.png"
                alt="sonoma seeds"
              />
            </div>

            <div className="vcSingle-sectionTwo flex justify-center items-start">
              <img
                className="vcSingle-image"
                src="../static/img/products/sonoma/single-front/so-northern-berry-400x579.jpg"
                alt=""
              />
            </div>

            <div className="vcSingle-sectionThree flex flex-col justify-center items-start">
              <header className="vcSingle-intro">
                <h3 className="vcProduct-cat">Hybrid</h3>
                <h1 className="flex items-center justify-center">Bubblegum</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi.
                </p>
              </header>

              <div className="vcSingle-choices flex flex-row justify-around items-center">
                <input
                  type="radio"
                  checked="checked"
                  id="tenseeds"
                  name="radio"
                />
                <label for="tenseeds">
                  <span>10 Seeds</span>$45 ea.
                </label>

                <input type="radio" id="twentyseeds" name="radio" />
                <label for="twentyseeds">
                  <span>20 Seeds</span>$85 ea.
                </label>

                <input type="radio" id="fiftyseeds" name="radio" />
                <label for="fiftyseeds">
                  <span>50 Seeds</span>$155 ea.
                </label>
              </div>

              <div className="vcSingle-input flex flex-col justify-around items-center">
                <input type="number" name="quantity" value="0" />

                <input
                  className="vcSingle-submit"
                  type="submit"
                  value="Add To Cart"
                />
              </div>

              <div className="vcShop-buttons flex flex-row justify-between">
                <button>Continue Shopping</button>
                <button>Checkout</button>
              </div>
            </div>
          </div>
        </article>

        <div className="vcWholesale-page">
          <div className="vcWholesale-content">
            <h3 className="vcCompany-similar">Similar Seeds by Sonoma</h3>
            <ul className="vcProduct-list flex flex-row justify-center items-baseline">
              <li className="vcProduct-item flex">
                <article>
                  <a href="">
                    <img
                      src="../static/img/products/sonoma/so-northern-berry.jpg"
                      alt=""
                    />
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

              <li className="vcProduct-item flex">
                <article>
                  <a href="">
                    <img
                      src="../static/img/products/sonoma/so-cali-kush.jpg"
                      alt=""
                    />
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
                <a href="">
                  <img
                    className="quick-view"
                    title="quick view"
                    src="../static/img/assets/icons/quick-view.svg"
                    alt="quick view"
                  />
                </a>
              </li>

              <li className="vcProduct-item flex">
                <article>
                  <a href="">
                    <img
                      src="../static/img/products/sonoma/so-blueberry.jpg"
                      alt=""
                    />
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
              </li>
            </ul>

            <h3 className="vcCompany-similar">
              Similar Seeds by Sunwest Genetics
            </h3>
            <ul className="vcProduct-list flex flex-row justify-center items-baseline">
              <li className="vcProduct-item flex">
                <article>
                  <a href="">
                    <img
                      src="../static/img/products/sunwest/sw-girl-scout-cookies.png"
                      alt=""
                    />
                  </a>
                  <header className="vcProduct-info flex flex-col">
                    <h2>
                      <a href="">Girl Scout Cookies</a>
                    </h2>
                    <div className="vcProduct-info flex flex-row justify-between">
                      <h3 className="vcProduct-cat">Indica</h3>
                      <p className="vcProduct-price">from $25</p>
                    </div>
                  </header>
                </article>
              </li>

              <li className="vcProduct-item flex">
                <article>
                  <a href="">
                    <img
                      src="../static/img/products/sunwest/sw-bubblegum.png"
                      alt=""
                    />
                  </a>
                  <header className="vcProduct-info flex flex-col">
                    <h2>
                      <a href="">Bubblegum</a>
                    </h2>
                    <div className="vcProduct-info flex flex-row justify-between">
                      <h3 className="vcProduct-cat">Indica</h3>
                      <p className="vcProduct-price">from $25</p>
                    </div>
                  </header>
                </article>
              </li>

              <li className="vcProduct-item flex">
                <article>
                  <a href="">
                    <img
                      src="../static/img/products/sunwest/sw-chemdog.png"
                      alt=""
                    />
                  </a>
                  <header className="vcProduct-info flex flex-col">
                    <h2>
                      <a href="">Chemdog</a>
                    </h2>
                    <div className="vcProduct-info flex flex-row justify-between">
                      <h3 className="vcProduct-cat">Indica</h3>
                      <p className="vcProduct-price">from $25</p>
                    </div>
                  </header>
                </article>
              </li>
            </ul>
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
