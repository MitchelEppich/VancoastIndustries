import MenuFilterLinks from "./menuFilterLinks";
import BrandLinks from "./brandLinks";
import VancoastLogo from "./vancoastLogo";
import SearchBar from "./searchBar";
import SearchBarToggle from "./searchBarToggle";
import SessionDetails from "./sessionDetails";
import Link from "next/link";

const header = props => {
  let showMobileMenu = {
    transform: props.misc.showMobileMenu
      ? "translateX(0) translateY(-10px)"
      : "translateX(-550px) translateY(-10px)",
    paddingTop: "15px"
  };

  let itemMenu = {
    fontSize: "22px",
    fontWight: "400",
    letterSpacing: "-1px",
    lineHeight: "33px"
  };

  let user = props.account.currentUser;
  let name = user != null ? user.company : "NO NAME";

  return (
    <div className="vcNav-primary">
      <div className="vcNav-bg">
        <div className="vcNav-wrap flex row justify-around items-center">
          <VancoastLogo {...props} />
          <div
            id="vcNavSection-two"
            className="flex justify-center lg:justify-around sm:ml-2 md:justify-start md:ml-6 sm:justify-start items-center cursor-pointer"
          >
            <div className="vancoastMenu flex flex-col lg:flex-row items-start lg:items-center sm:hidden md:hidden lg:hidden">
              <nav>
                <ul
                  onMouseLeave={() => {
                    props.toggleMenuDropdown({
                      value: "",
                      show: true
                    });
                  }}
                  className="flex"
                >
                  <MenuFilterLinks {...props} />
                  <BrandLinks {...props} />
                </ul>
              </nav>
            </div>
            <div
              onClick={() => props.toggleMobileMenu(!props.misc.showMobileMenu)}
              id="vcNav-icon"
              className="xl:hidden xxl:hidden"
            >
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </div>
            <div
              className="xl:hidden xxl:hidden"
              onClick={() => {
                console.log("CLICKED");
                props.toggleMobileMenu(false);
              }}
            >
              <div
                style={showMobileMenu}
                className="vancoastMenu flex flex-col lg:flex-row items-start lg:items-center"
              >
                <nav>
                  <ul
                    // onMouseLeave={() => {
                    //   props.toggleMenuDropdown({
                    //     value: "",
                    //     show: true
                    //   });
                    // }}
                    className="flex"
                  >
                    {/* <p className="capitalize text-xl font-bold pt-2 pb-4 text-blue">
                        Welcome, {name}!
                      </p> */}
                    <li className="font-bold text-2xl vcShop-cats">
                      <a>Account</a>
                    </li>
                    <li>
                      {props.account.currentUser != null &&
                      props.account.currentUser.error == null ? (
                        <Link href="/account">
                          <a className="flex capitalize ml-2 mt-1">
                            <span style={itemMenu} className="text-center">
                              My Account
                            </span>
                          </a>
                        </Link>
                      ) : (
                        <Link href="/login">
                          <a className="flex capitalize ml-2 mt-1">
                            <span style={itemMenu} className="text-center">
                              Login/Register
                            </span>
                          </a>
                        </Link>
                      )}
                    </li>
                    <BrandLinks {...props} />
                    <MenuFilterLinks {...props} />
                  </ul>
                </nav>
              </div>
            </div>
            <SearchBarToggle {...props} />
          </div>
          <SessionDetails {...props} />
        </div>
      </div>

      <SearchBar {...props} />
    </div>
  );
};

export default header;
