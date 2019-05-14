/**************************************/
/*Our highest ordered component. This
component wraps each page. Naturally this
component has the navigation bar and the
login form.*/
/**************************************/

import "../scss/shop-pages.scss";
import "../scss/style.scss";
import "../scss/home.scss";
import "../scss/account.scss";
import "../scss/checkout.scss";
import "../scss/footer.scss";
import "../scss/login.scss";
import "../scss/pages.scss";
import "../scss/single-product.scss";
// lib
import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";
// custom
const dev = process.env.NODE_ENV !== "production";
import keyCodes from "../scripts/keyCodes";
import actions from "../store/actions";
import Menu from "../components/menu";
import MATM from "../components/matm";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Cart from "../components/cart";
import Alert from "../components/alert";
import QuickViewModal from "../components/product/quickView";
import Footer from "../components/footer";
import Loader from "../components/loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { itemBuilder } from "../scripts/savedItems";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { toTop: false };
    if (!props.router.asPath.includes("product")) props.getStrains();
  }
  async componentDidMount() {
    let pageReady = false;
    try {
      (await this.props.getStrains()) || {};
      this.prePageLoad(this.props.router);
      pageReady = true;
    } catch (err) {
      console.log(err);
    }
    this.props.togglePageReady(pageReady);
    window.addEventListener("resize", () => {
      this.setMediaSize();
      if (this.props.misc.showMobileMenu) {
        this.props.toggleMobileMenu(false);
      }
    });
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
        this.setState({ toTop: true });
      }
      if (window.scrollY < window.innerHeight) {
        this.setState({ toTop: false });
      }
    });
    window.addEventListener(
      "keydown",
      e => this.dealWithKeyboard(e, keyCodes, this.dealWithKeyboard),
      false
    );
    if (dev) {
      window.addEventListener("keypress", e => {
        if (e.shiftKey && e.code === "KeyP") {
          console.log(this.props);
        }
      });
    }
    this.recallVerifiedUser();
  }

  componentWillUnMount() {
    window.removeEventListener("resize", () => {
      this.setMediaSize();
      if (this.props.misc.showMobileMenu) {
        this.props.toggleMobileMenu(false);
      }
    });
    window.removeEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
        this.setState({ toTop: true });
      }
      if (window.scrollY < window.innerHeight) {
        this.setState({ toTop: false });
      }
    });
    if (dev) {
      window.removeEventListener("keypress", e => {
        if (e.shiftKey && e.code === "KeyP") {
          console.log(this.props);
        }
      });
    }
  }

  recallVerifiedUser = () => {
    let token,
      rememberMe = true;
    token = localStorage.getItem("token");
    if (token == undefined) {
      token = sessionStorage.getItem("token");
      rememberMe = false;
    }
    if (token != undefined)
      this.props.verifyCredentials({ jwt: token, rememberMe }).then(res => {
        let cartItems = res.cartItems || [];
        let items = itemBuilder({
          savedItems: cartItems,
          products: this.props.shop.strains
        });
        let cart = this.props.checkout.cart;
        let coupon = this.props.checkout.orderDetails.coupon;
        for (let item of items) {
          let _identifier = item.sotiId + item.packSize;
          this.props.modifyCart({
            cart: cart,
            action: "SET",
            max: cart.maxPerPackage,
            productIdentifier: _identifier,
            product: item,
            quantity: item.quantity,
            coupon: coupon
          });
        }
      });
  };

  render() {
    return (
      <React.Fragment>
        <div id="top">
          <Menu {...this.props} />
          <Cart {...this.props} />
          {this.props.misc.MATM ? <MATM /> : null}
          {this.props.shop.quickViewModal != null ? (
            <QuickViewModal {...this.props} />
          ) : null}
          {this.props.misc.alert != null ? <Alert {...this.props} /> : null}
          {this.props.misc.pageReady ? (
            this.props.children
          ) : (
            <div className="w-full h-screen bg-white">
              <Loader {...this.props} />
            </div>
          )}
        </div>

        <Footer {...this.props} />
        <AnchorLink
          aria-label="toTop"
          className="items-center flex"
          href="#top"
        >
          {this.state.toTop ? (
            <div
              id="jumpToTop"
              className="fixed z-999 w-12 pb-2 mb-12 mr-4 h-12 bg-blue pin-b pin-r text-white text-center text-lg justify-center cursor-pointer hover:bg-blue-dark scale-item items-center flex rounded-full shadow-md"
            >
              <FontAwesomeIcon
                icon={faAngleUp}
                className="fa-2x cursor-pointer flex justify-center mt-1 mx-auto"
              />
            </div>
          ) : (
            <div />
          )}
        </AnchorLink>
      </React.Fragment>
    );
  }
  setMediaSize = () => {
    let mediaSizes = {
      sm: { min: 100, max: 479 },
      md: { min: 480, max: 767 },
      lg: { min: 768, max: 991 },
      xl: { min: 992, max: 1367 },
      xxl: { min: 1368, max: 999999999 }
    };
    for (let mediaSize of Object.keys(mediaSizes)) {
      let _mediaSizeDim = mediaSizes[mediaSize];
      let _width = window.innerWidth;
      if (
        _width ==
          Math.max(_mediaSizeDim.min, Math.min(_width, _mediaSizeDim.max)) &&
        this.props.misc.mediaSize != mediaSize
      ) {
        if (["sm", "md"].includes(mediaSize)) {
          this.props.setMediaSize({ mediaSize: mediaSize });
        } else {
          this.props.setMediaSize({ mediaSize: mediaSize });
        }
        return mediaSize;
      }
    }
  };

  prePageLoad = router => {
    let path = router.asPath,
      indexOfBrand = -1;
    let brands = this.props.shop.brands.map((brand, index) => {
      return brand.name.replace(/ /g, "").toLowerCase();
    });
    if (path.includes("/shop/") && path.length > 6) {
      let brand = path.slice(6);
      indexOfBrand = brands.indexOf(brand);
      if (indexOfBrand > 0) this.props.setBrandIndex(indexOfBrand);
      this.props.toggleFilter({
        activeFilters: this.props.shop.activeFilters,
        category: "Brands",
        newFilter: this.props.shop.brands[indexOfBrand].name
      });
      Router.push("/shop", path);
    }
    if (path.includes("/product/") && path.length > 9) {
      let productName = path.slice(9).toLowerCase();
      let currentProduct = this.props.shop.strains.find((strain, index) => {
        return strain.alias.toLowerCase().replace(/ /g, "") == productName;
      });
      this.props.setCurrentProduct({ newProduct: currentProduct });
      indexOfBrand = brands.indexOf(
        currentProduct.company.name.toLowerCase().replace(/ /g, "")
      );
      if (indexOfBrand > 0) this.props.setBrandIndex(indexOfBrand);
      Router.push("/product", path);
    }
  };
  dealWithKeyboard = (e, codes, thisFunc) => {
    let lastKey = e.code;
    if (codes.length == 0) {
      this.props.toggleMATM(true);
      return;
    }
    if (codes[0] == lastKey) {
      codes.shift();
      window.addEventListener("keypress", e => thisFunc(e, codes, thisFunc));
    }
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setMediaSize: input => dispatch(actions.setMediaSize(input)),
    toggleCart: isCartVisible => dispatch(actions.toggleCart(isCartVisible)),
    toggleSearchBar: showSearch =>
      dispatch(actions.toggleSearchBar(showSearch)),
    setSearchValue: value => dispatch(actions.setSearchValue(value)),
    setBrandIndex: index => dispatch(actions.setBrandIndex(index)),
    toggleMobileMenu: isMobileMenuVisible =>
      dispatch(actions.toggleMobileMenu(isMobileMenuVisible)),
    toggleMenuDropdown: options =>
      dispatch(actions.toggleMenuDropdown(options)),
    setStrains: strains => dispatch(actions.setStrains(strains)),
    toggleFilter: options => dispatch(actions.toggleFilter(options)),
    purgeActiveFilters: activeFilters =>
      dispatch(actions.purgeActiveFilters(activeFilters)),
    setCurrentProduct: product => {
      dispatch(actions.quickAddToCartQty(0));
      dispatch(actions.setCurrentProduct(product));
    },
    toggleMATM: show => dispatch(actions.toggleMATM(show)),
    verifyCredentials: credentials =>
      dispatch(actions.verifyCredentials(credentials)),
    togglePageReady: isPageReady =>
      dispatch(actions.togglePageReady(isPageReady)),
    getStrains: () => dispatch(actions.getStrains()),
    modifyCart: input => dispatch(actions.modifyCart(input)),
    toggleAlert: alertObj => dispatch(actions.toggleAlert(alertObj)),
    toggleModal: product => dispatch(actions.toggleModal(product)),
    quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
    modifyPotentialQuantity: input =>
      dispatch(actions.modifyPotentialQuantity(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(Layout);
