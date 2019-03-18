import Link from "next/link";

const brandLinks = props => {
  let brandLinks = props.shop.brands.map((brand, index) => {
    return (
      <li key={index}>
        <Link
          prefetch
          href="/shop"
          as={"/shop#" + brand.name.replace(/ /g, "").toLowerCase()}
        >
          <a
            onClick={() => {
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
      className="vcShop-brands"
      onClick={() => props.purgeActiveFilters()}
    >
      <Link prefetch href="/shop" as={"/shop#cropkingseeds"}>
        <a
          onClick={() => {
            props.setBrandIndex(1);
          }}
          className="cursor-pointer"
        >
          Brands
        </a>
      </Link>
      {props.misc.menuDropdownVisible == "brands" ? (
        <ul>{brandLinks.slice(1)}</ul>
      ) : null}
    </li>
  );
};

export default brandLinks;
