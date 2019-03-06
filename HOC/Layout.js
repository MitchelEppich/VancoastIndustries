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

import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../store/actions";
import Header from "../components/header";
import Footer from "../components/footer";

class Layout extends Component {
  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <React.Fragment>
        <Header {...this.props} />
        {this.props.children}
        <Footer {...this.props} />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCart: isCartVisible => dispatch(actions.toggleCart(isCartVisible)),
    setBrandIndex: index => dispatch(actions.setBrandIndex(index)),
    toggleMobileMenu: isMobileMenuVisible =>
      dispatch(actions.toggleMobileMenu(isMobileMenuVisible)),
    toggleMenuDropdown: options => dispatch(actions.toggleMenuDropdown(options))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(Layout);
