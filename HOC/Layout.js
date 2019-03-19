/**************************************/
/*Our highest ordered component. This
component wraps each page. Naturally this
component has the navigation bar and the
login form.*/
/**************************************/

import "../scss/shop-pages.scss";
import "../scss/style.scss";
import "../scss/home.scss";
import "../scss/checkout.scss";
import "../scss/account.scss";
import "../scss/footer.scss";
import "../scss/login.scss";
import "../scss/pages.scss";
import "../scss/single-product.scss";
// lib
import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";
// custom
import actions from "../store/actions";
import Menu from "../components/menu";
import Cart from "../components/cart";
import Footer from "../components/footer";
import shuffle from "../scripts/shuffle";

class Layout extends Component {
  componentWillMount() {
    let pageReady = false;
    try {
      this.props.setStrains(shuffle(this.props.shop.strains));
      this.prePageLoad(Router);
      pageReady = true;
    } catch (err) {
      console.log(err);
    }
    this.props.togglePageReady(pageReady);
  }
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setMediaSize();
      if (this.props.misc.showMobileMenu) {
        this.props.toggleMobileMenu(false);
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Menu {...this.props} />
        <Cart {...this.props} />
        {this.props.misc.pageReady ? (
          this.props.children
        ) : (
          <div className="w-full h-screen" />
        )}
        <Footer {...this.props} />
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
          // this.props.toggleShowFilters(false);
          this.props.setMediaSize({ mediaSize: mediaSize });
        } else {
          // this.props.toggleShowFilters(true);
          this.props.setMediaSize({ mediaSize: mediaSize });
        }
        return mediaSize;
      }
    }
  };

  prePageLoad = router => {
    let path = router.asPath,
      indexOfBrand;
    let brands = this.props.shop.brands.map((brand, index) => {
      return brand.name.replace(/ /g, "").toLowerCase();
    });
    if (path.includes("/shop#") && path.length > 6) {
      let brand = path.slice(6);
      indexOfBrand = brands.indexOf(brand);
    }
    if (path.includes("/product#") && path.length > 9) {
      let productName = path.slice(9).toLowerCase();
      let currentProduct = this.props.shop.strains.filter((strain, index) => {
        return strain.name.toLowerCase().replace(/ /g, "") === productName;
      });
      this.props.setCurrentProduct(currentProduct[0]);
      indexOfBrand = brands.indexOf(
        currentProduct[0].company[0].toLowerCase().replace(/ /g, "")
      );
    }
    if (indexOfBrand) this.props.setBrandIndex(indexOfBrand);
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setMediaSize: input => dispatch(actions.setMediaSize(input)),
    toggleCart: isCartVisible => dispatch(actions.toggleCart(isCartVisible)),
    toggleSearchBar: input => dispatch(actions.toggleSearchBar(input)),
    setBrandIndex: index => dispatch(actions.setBrandIndex(index)),
    toggleMobileMenu: isMobileMenuVisible =>
      dispatch(actions.toggleMobileMenu(isMobileMenuVisible)),
    toggleMenuDropdown: options =>
      dispatch(actions.toggleMenuDropdown(options)),
    setStrains: strains => dispatch(actions.setStrains(strains)),
    toggleFilter: options => dispatch(actions.toggleFilter(options)),
    purgeActiveFilters: () => dispatch(actions.purgeActiveFilters()),
    setCurrentProduct: product => dispatch(actions.setCurrentProduct(product)),
    togglePageReady: isPageReady =>
      dispatch(actions.togglePageReady(isPageReady))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(Layout);
