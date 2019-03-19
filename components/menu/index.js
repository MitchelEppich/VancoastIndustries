import MenuFilterLinks from "./menuFilterLinks";
import BrandLinks from "./brandLinks";
import VancoastLogo from "./vancoastLogo";
import SearchBar from "./searchBar";
import SearchBarToggle from "./searchBarToggle";
import SessionDetails from "./sessionDetails";

const header = props => {
  let showMobileMenu = props.shop.showMobileMenu
    ? {
        transform: "translateX(0) translateY(-10px)",
        paddingTop: "15px"
      }
    : {
        transform: "translateX(-500px) translateY(-10px)",
        opacity: "0",
        backgroundColor: "rgba(0,0,0,0)"
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
