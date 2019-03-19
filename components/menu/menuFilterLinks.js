import Link from "next/link";

const menuFilterLinks = props => {
  let links = ["Indica", "Sativa", "Hybrid", "Autoflower", "Feminized"].map(
    (filter, index) => {
      return (
        <Link key={index} href="/shop">
          <li>
            <a
              onClick={() => {
                props.purgeActiveFilters();
                props.toggleFilter({
                  activeFilters: props.shop.activeFilters,
                  newFilter: filter.toLowerCase()
                });
                window.scrollTo(0, 1000);
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
      className="vcShop-cats"
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
      {props.misc.menuDropdownVisible == "shop" || props.shop.showMobileMenu ? (
        <ul className="">{links}</ul>
      ) : null}
    </li>
  );
};

export default menuFilterLinks;
