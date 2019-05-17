import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import {
  Menu,
  Info,
  Shipping,
  Billing,
  Password,
  Orders,
  SavedItems
} from "../components/account";

class Index extends Component {
  render() {
    let menuOptions = [
      <Info {...this.props} />,
      <Shipping {...this.props} />,
      <Billing {...this.props} />,
      <Password {...this.props} />,
      <Orders {...this.props} />,
      <SavedItems {...this.props} />
    ];
    let currentOptionIndex = this.props.account.currentOptionIndex;
    let currentOption = menuOptions[currentOptionIndex];
    return (
      <Layout {...this.props}>
        <article className="vcPage-content vcAccount">
          <div className="vcAccount-wrap flex flex-wrap">
            <Menu currentOptionIndex={currentOptionIndex} {...this.props} />
            <div className="vcAccount-content w-4/5 sm:w-full md:w-full lg:w-full xl:w-2/3">
              {currentOption}{" "}
            </div>
          </div>
        </article>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeOption: option => dispatch(actions.changeOption(option)),
    updateAccount: input => dispatch(actions.updateAccount(input)),
    deleteAddress: input => dispatch(actions.deleteAddress(input)),
    setAddressToEdit: input => dispatch(actions.setAddressToEdit(input)),
    resetPassword: input => dispatch(actions.resetPassword(input)),
    modifySavedItems: input => dispatch(actions.modifySavedItems(input)),
    logout: () => dispatch(actions.logout()),
    showRecentOrder: index => dispatch(actions.showRecentOrder(index)),
    reOrder: order => dispatch(actions.reOrder(order)),
    setCurrentProduct: product => {
      dispatch(actions.quickAddToCartQty(0));
      dispatch(actions.setCurrentProduct(product));
    },
    setBrandIndex: index => dispatch(actions.setBrandIndex(index))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
