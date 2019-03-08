import Link from "next/link";
import MenuFilterLinks from "./menuFilterLinks";
import BrandLinks from "./brandLinks";
import VancoastLogo from "./vancoastLogo";
// import Cart from "../cart";

const header = props => {
  let showMobileMenu = props.shop.showMobileMenu
    ? {
        transform: "translateX(0) translateY(-10px)",
        paddingTop: "15px"
      }
    : {
        transform: "translateX(-500px) translateY(-10px)"
      };
  if (!["sm", "md", "lg"].includes(props.misc.mediaSize)) {
    showMobileMenu = {
      transform: "translateX(0) translateY(-10px)",
      paddingTop: "15px"
    };
  }

  return (
    <div onMouseEnter={() => console.log(props)} className="vcNav-primary">
      <div className="vcNav-bg">
        <div className="vcNav-wrap flex row justify-around items-center">
          <VancoastLogo {...props} />

          <div
            id="vcNavSection-two"
            className={
              "flex justify-center items-center " +
              (props.shop.showMobileMenu ? "reveal" : "")
            }
          >
            <div
              onClick={() => props.toggleMobileMenu(!props.shop.showMobileMenu)}
              id="vcNav-icon"
            >
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </div>

            <div
              style={showMobileMenu}
              className="vancoastMenu flex flex-col lg:flex-row items-start lg:items-center"
            >
              <nav>
                <ul
                  onMouseLeave={() => {
                    props.toggleMenuDropdown({
                      value: "",
                      show: false
                    });
                  }}
                  className="flex"
                >
                  <MenuFilterLinks {...props} />
                  <BrandLinks {...props} />
                </ul>
              </nav>
            </div>

            <div id="vancoastSearch" className="flex">
              <img
                src="../static/img/assets/icons/vancoast-search.svg"
                alt=""
              />
            </div>
          </div>

          <div className="vcNavSection-three flex justify-center items-center">
            <button className="vcNav-login">Login</button>

            <div className="vcWelcome flex flex-col justify-center items-center">
              <Link href="/account">
                <a className="flex flex-col items-center justify-center">
                  <img
                    className="flex"
                    src="../static/img/assets/icons/user-icon.svg"
                    alt=""
                  />
                  <span className="flex">Welcome, Steve</span>
                </a>
              </Link>
            </div>

            <div
              onClick={() => props.toggleCart(!props.misc.showCart)}
              className="vcNav-cart"
            >
              <img src="../static/img/assets/icons/box-icon.svg" alt="" />
              <span className="vcNav-cartCount">
                {Object.keys(props.checkout.cart.items).length}
              </span>
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
