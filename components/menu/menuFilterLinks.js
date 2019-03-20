import Link from "next/link";

const menuFilterLinks = props => {
  let links = ["Indica", "Sativa", "Hybrid", "Autoflower", "Feminized"].map(
    (filter, index) => {
      return (
        <Link key={index} href="/shop">
          <li>
            <a
              onClick={() => {
                console.log(props.shop.activeFilters);
                props.toggleFilter({
                  activeFilters: props.shop.activeFilters,
                  newFilter: filter.toLowerCase()
                });
                window.scrollTo(0, 1000);
                // props.purgeActiveFilters();
              }}
              className="cursor-pointer"
            >
              {filter}
            </a>
          </li>
        </Link>
      );
    }
  );
  return (
    <li
      onMouseEnter={() => {
        props.toggleMenuDropdown({ value: "shop", show: true });
      }}
      className={`${
        ["sm", "md", "lg"].includes(props.misc.mediaSize) ? "mt-6" : ""
      } vcShop-cats`}
    >
      <Link prefetch href="/shop">
        <a
          onClick={() => {
            props.purgeActiveFilters();
            props.setBrandIndex(0);
          }}
          className="cursor-pointer"
        >
          Shop
        </a>
      </Link>
      {props.misc.menuDropdownVisible == "shop" ||
      props.misc.showMobileMenu != null ? (
        <ul className="">{links}</ul>
      ) : null}
    </li>
  );
};

export default menuFilterLinks;
