const saveItems = props => {
    return (
        <div id="vcSaved-tab" className="tabcontent">
            <h1>Saved Items</h1>
            <div className="vcSaved-content">
                <ul className="vcSaved-list flex flex-row">
                    <li className="vcItem vcItem-one flex">
                        <img src="../static/img/products/sonoma/so-bruce-banner.jpg" alt="bruce banner" />

                        <div className="vcItem-info flex flex-col justify-around items-start">
                            <h2>Bruce Banner</h2>
                            <h3 className="vcSaved-cat">Indica</h3>
                            <div className="vcSaved-brand">
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
                            <button className="vcSaved-btn" href="#">
                                Add To Cart
                            </button>
                        </div>
                    </li>

                    <li className="vcItem vcItem-two flex">
                        <img src="../static/img/products/sonoma/so-northern-berry.jpg" alt="northern berry" />

                        <div className="vcItem-info flex flex-col justify-around items-start">
                            <h2>Northern Berry</h2>
                            <h3 className="vcSaved-cat">Indica</h3>
                            <div className="vcSaved-brand">
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
                            <button className="vcSaved-btn" href="#">
                                Add To Cart
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default saveItems;
