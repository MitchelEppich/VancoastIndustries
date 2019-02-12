/**************************************/
/*Our highest ordered component. This
component wraps each page. Naturally this
component has the navigation bar and the
login form.*/
/**************************************/

import "../scss/account.scss";
import "../scss/checkout.scss";
import "../scss/footer.scss";
import "../scss/home.scss";
import "../scss/login.scss";
import "../scss/pages.scss";
import "../scss/shop-pages.scss";
import "../scss/single-product.scss";
import "../scss/style.scss";

import React, { Component } from "react";
import DevTools from "../store/DevTools";
import { connect } from "react-redux";
import actions from "../store/actions";
import Header from "../components/header";
import Footer from "../components/footer";

class Layout extends Component {
    componentDidMount() {}

    componentDidUpdate() {}

    render() {
        return (
            <div>
                <Header {...this.props} />
                {this.props.children}
                <Footer {...this.props} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCart: bool => dispatch(actions.toggleCart(bool))
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(Layout);
