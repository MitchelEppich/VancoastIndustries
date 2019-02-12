import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import { Billing, Info, Menu, Orders, Password, SavedItems } from "../components/account";

class Index extends Component {
    render() {
        let menuOptions = [
            <Info {...this.props} />,
            <Billing {...this.props} />,
            <Password {...this.props} />,
            <Orders {...this.props} />,
            <SavedItems {...this.props} />
        ];
        let currentOptionIndex = this.props.account.currentOptionIndex;
        let currentOption = menuOptions[currentOptionIndex];
        return (
            <Layout>
                <article className="vcPage-content vcAccount">
                    <div className="vcAccount-wrap flex flex-col lg:flex-row">
                        <Menu currentOptionIndex={currentOptionIndex} {...this.props} />
                        <div className="vcAccount-content">{currentOption} </div>
                    </div>
                </article>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return { changeOption: option => dispatch(actions.changeOption(option)) };
};

export default connect(
    state => state,
    mapDispatchToProps
)(withData(Index));
