import Link from "next/link";

const header = props => {
    return (
        <div className="vcNav-primary">
            <div className="vcNav-bg">
                <div className="vcNav-wrap flex row justify-around items-center">
                    <div className="vcNavSection-one flex justify-center items-center">
                        <Link href="/">
                            <a onClick={() => console.log(props)} className="vcNav-logo">
                                <img src="../static/img/assets/vancoast-bar-logo.png" alt="vancoast industries" />
                            </a>
                        </Link>
                        <Link href="/">
                            <a onClick={() => console.log(props)} className="vcNav-vLogo">
                                <img src="../static/img/assets/vancoast-v-logo.png" alt="" />
                            </a>
                        </Link>
                    </div>

                    <div id="vcNavSection-two" className="flex justify-center items-center">
                        <div id="vcNav-icon">
                            <div className="bar1" />
                            <div className="bar2" />
                            <div className="bar3" />
                        </div>

                        <div className="vancoastMenu flex flex-col lg:flex-row items-start lg:items-center">
                            <nav>
                                <ul className="flex">
                                    <li className="vcShop-cats">
                                        <Link prefetch href="/shop">
                                            <a>Shop</a>
                                        </Link>
                                        <ul className="flex">
                                            <li>
                                                <a href="">Indica</a>
                                            </li>
                                            <li>
                                                <a href="">Sativa</a>
                                            </li>
                                            <li>
                                                <a href="">Hybrid</a>
                                            </li>
                                            <li>
                                                <a href="">Autoflower</a>
                                            </li>
                                            <li>
                                                <a href="">Feminized</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="vcShop-brands">
                                        <Link prefetch href="/shop">
                                            <a>Brands</a>
                                        </Link>
                                        <ul>
                                            <li>
                                                <Link prefetch href="/shop">
                                                    <a>Crop King Seeds</a>
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link prefetch href="/shop">
                                                    <a>Sunwest Genetics</a>
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link prefetch href="/shop">
                                                    <a>Sonoma Seeds</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div id="vancoastSearch" className="flex">
                            <img src="../static/img/assets/icons/vancoast-search.svg" alt="" />
                        </div>
                    </div>

                    <div className="vcNavSection-three flex justify-center items-center">
                        <button className="vcNav-login">Login</button>

                        <div className="vcWelcome flex flex-col justify-center items-center">
                            <Link href="/account">
                                <a className="flex flex-col items-center justify-center">
                                    <img className="flex" src="../static/img/assets/icons/user-icon.svg" alt="" />
                                    <span className="flex">Welcome, Steve</span>
                                </a>
                            </Link>
                        </div>

                        <div onClick={() => props.toggleCart(!props.misc.showCart)} className="vcNav-cart">
                            <img src="../static/img/assets/icons/box-icon.svg" alt="" />
                            <span className="vcNav-cartCount">8</span>
                        </div>
                        <div id="vcNav-cartList" className={props.misc.showCart ? "show" : ""}>
                            <div className="vcNav-cartWrap">
                                <div className="vcCart-title">Cart</div>

                                <div className="vcItem vcItem-one flex flex-row">
                                    <img src="img/products/sonoma/so-ak47.jpg" alt="" />

                                    <div className="vcItem-info flex flex-col justify-around items-start">
                                        <h3>Bruce Banner (Hybrid)</h3>

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
                                </div>

                                <div className="vcItem vcItem-two flex flex-row">
                                    <img src="img/products/sonoma/so-bubblegum.jpg" alt="" />

                                    <div className="vcItem-info flex flex-col justify-around items-start">
                                        <h3>AK47 (Sativa)</h3>

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
                                </div>

                                <div className="vcItem vcItem-three flex flex-row">
                                    <img src="img/products/sonoma/so-northern-lights.jpg" alt="" />

                                    <div className="vcItem-info flex flex-col justify-around items-start">
                                        <h3>Bubblegum (Hybrid)</h3>

                                        <div className="vcItem-brand">
                                            <span>Brand -</span>
                                            Sonoma Seeds
                                        </div>

                                        <div className="vcItem-details flex flex-row justify-start">
                                            <div className="vcItem-qty flex flex-col">
                                                <span className="vcPrefix">QTY.</span>
                                                <span>x2</span>
                                            </div>

                                            <div className="vcItem-price flex flex-col">
                                                <span className="vcPrefix">Price</span>
                                                <span>$155</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="vcCart-summary flex flex-row justify-start">
                                    <div className="vcTotal-qty flex flex-col">
                                        <span className="vcPrefix">Total QTY.</span>
                                        <span>x7</span>
                                    </div>

                                    <div className="vcTotal-price flex flex-col">
                                        <span className="vcPrefix">Price</span>
                                        <span>$1085</span>
                                    </div>
                                </div>
                            </div>
                            <Link prefetch href="/checkout">
                                <button>Checkout</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="vcSearch-wrap">
                <input className="vcNav-search" type="text" placeholder="Search" />
            </div>
        </div>
    );
};

export default header;
