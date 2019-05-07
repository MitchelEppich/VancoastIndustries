import Link from "next/link";

const brandLinks = props => {
  let brandLinks = props.shop.brands.map((brand, index) => {
    return (
      <li key={index}>
        <Link
          prefetch
          href="/shop"
          as={"/shop/" + brand.name.replace(/ /g, "").toLowerCase()}
        >
          <a
            onClick={() => {
              props.purgeActiveFilters(props.shop.activeFilters);
              props.setBrandIndex(index);
            }}
            className="cursor-pointer"
          >
            {brand.name}
          </a>
        </Link>
      </li>
    );
  });
  return (
    <li
      onMouseEnter={() => {
        props.toggleMenuDropdown({
          value: "brands",
          show: true
        });
      }}
      className={`${
        ["sm", "md", "lg"].includes(props.misc.mediaSize) ? "mt-4" : ""
      } vcShop-brands z-50`}
    >
      <Link prefetch href="/shop">
        <a
          onClick={() => {
            props.purgeActiveFilters(props.shop.activeFilters);
            props.setBrandIndex(0);
          }}
          className="cursor-pointer"
        >
          Brands
        </a>
      </Link>
      {props.misc.menuDropdownVisible == "brands" ||
      props.misc.showMobileMenu != null ? (
        <ul className="ml-2">{brandLinks.slice(1)}</ul>
      ) : null}
    </li>
  );
};

export default brandLinks;
