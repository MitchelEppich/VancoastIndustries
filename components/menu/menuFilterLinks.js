import Link from "next/link";

const menuFilterLinks = props => {
  let links = ["Indica", "Sativa", "Hybrid", "Autoflower", "Feminized"].map(
    (filter, index) => {
      return (
        <Link key={index} href="/shop">
          <li>
            <a
              onClick={() => {
                props.purgeActiveFilters(props.shop.activeFilters);
                props.toggleFilter({
                  activeFilters: props.shop.activeFilters,
                  category: index < 3 ? "Type" : "Strain Kind",
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
      className={`${
        ["sm", "md", "lg"].includes(props.misc.mediaSize) ? "mt-6" : ""
      } vcShop-cats`}
    >
      <Link prefetch href="/shop">
        <a
          onClick={() => {
            props.purgeActiveFilters(props.shop.activeFilters);
            props.setBrandIndex(0);
          }}
          className="cursor-pointer"
        >
          Shop
        </a>
      </Link>
      {props.misc.menuDropdownVisible == "shop" ||
      props.misc.showMobileMenu != null ? (
        <ul className="ml-2">{links}</ul>
      ) : null}
    </li>
  );
};

export default menuFilterLinks;
