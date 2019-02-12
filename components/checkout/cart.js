const cart = props => {
    return (
        <React.Fragment>
            <div className="vcCheckout-content">
                <ul className="vcCheckout-list flex flex-row justify-center lg:justify-start items-baseline">
                    <li className="vcItem vcItem-one flex items-end">
                        <img src="../static/../static/img/products/sonoma/so-bruce-banner.jpg" alt="bruce banner" />

                        <div className="vcItem-info flex flex-col justify-around items-start">
                            <h2>Bruce Banner</h2>
                            <h3 className="vcCheckout-cat">Indica</h3>
                            <div className="vcItem-brand">
                                <span>Brand -</span>
                                Sonoma Seeds
                            </div>

                            <div className="vcItem-details flex flex-row justify-start">
                                <div className="vcItem-qty flex flex-col">
                                    <span className="vcPrefix">QTY.</span>
                                    <span>x3</span>
                                </div>

                                <div className="vcItem-price flex flex-col">
                                    <span className="vcPrefix">Price</span>
                                    <span>$155</span>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="vcItem vcItem-two flex items-end">
                        <img src="../static/img/products/cks/cks-lambs-breath.png" alt="lambs breath" />

                        <div className="vcItem-info flex flex-col justify-around items-start">
                            <h2>Lambs Breath</h2>
                            <h3 className="vcCheckout-cat">Sativa</h3>
                            <div className="vcItem-brand">
                                <span>Brand -</span>
                                Crop King Seeds
                            </div>

                            <div className="vcItem-details flex flex-row justify-start">
                                <div className="vcItem-qty flex flex-col">
                                    <span className="vcPrefix">QTY.</span>
                                    <span>x3</span>
                                </div>

                                <div className="vcItem-price flex flex-col">
                                    <span className="vcPrefix">Price</span>
                                    <span>$155</span>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="vcItem vcItem-three flex items-end">
                        <img src="../static/img/products/sunwest/sw-purple-kush.png" alt="purple kush" />

                        <div className="vcItem-info flex flex-col justify-around items-start">
                            <h2>Purple Kush</h2>
                            <h3 className="vcCheckout-cat">Indica</h3>
                            <div className="vcItem-brand">
                                <span>Brand -</span>
                                Sunwest Genetics
                            </div>

                            <div className="vcItem-details flex flex-row justify-start">
                                <div className="vcItem-qty flex flex-col">
                                    <span className="vcPrefix">QTY.</span>
                                    <span>x3</span>
                                </div>

                                <div className="vcItem-price flex flex-col">
                                    <span className="vcPrefix">Price</span>
                                    <span>$155</span>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="vcItem vcItem-four flex items-end">
                        <img src="../static/img/products/sonoma/so-northern-berry.jpg" alt="northern berry" />

                        <div className="vcItem-info flex flex-col justify-around items-start">
                            <h2>Northern Berry</h2>
                            <h3 className="vcCheckout-cat">Indica</h3>
                            <div className="vcItem-brand">
                                <span>Brand -</span>
                                Sonoma Seeds
                            </div>

                            <div className="vcItem-details flex flex-row justify-start">
                                <div className="vcItem-qty flex flex-col">
                                    <span className="vcPrefix">QTY.</span>
                                    <span>x3</span>
                                </div>

                                <div className="vcItem-price flex flex-col">
                                    <span className="vcPrefix">Price</span>
                                    <span>$155</span>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="vcItem vcItem-five flex items-end">
                        <img src="../static/img/products/sonoma/so-la-confidential.jpg" alt="northern berry" />

                        <div className="vcItem-info flex flex-col justify-around items-start">
                            <h2>LA Confidential</h2>
                            <h3 className="vcCheckout-cat">Sativa</h3>
                            <div className="vcItem-brand">
                                <span>Brand -</span>
                                Sonoma Seeds
                            </div>

                            <div className="vcItem-details flex flex-row justify-start">
                                <div className="vcItem-qty flex flex-col">
                                    <span className="vcPrefix">QTY.</span>
                                    <span>x3</span>
                                </div>

                                <div className="vcItem-price flex flex-col">
                                    <span className="vcPrefix">Price</span>
                                    <span>$155</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                <div className="vcCheckout-totals flex flex-col justify-around items-center">
                    <div className="vcCheckout-subtotal">
                        Subtotal: <span>$260</span>
                    </div>

                    <div className="vcCheckout-taxes">
                        Taxes: <span>$450</span>
                    </div>

                    <div className="vcCheckout-total">
                        Total: <span>$305</span>
                    </div>
                </div>
            </div>

            <input
                onClick={() => props.changeStep("Shipping")}
                type="submit"
                className="vcCheckout-btn"
                value="Shipping"
            />
        </React.Fragment>
    );
};
export default cart;
