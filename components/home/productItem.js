import Link from "next/link";
import Router from "next/router";

const productItem = props => {
  let img =
    props.strain.company.name == "sonoma seeds"
      ? "../static/img/products/sonoma/so-blue-diesel.jpg"
      : props.strain.company.name == "crop king seeds"
      ? "../static/img/products/cks/cks-white-widow-auto.png"
      : "../static/img/products/sunwest/sw-cheese.png";
  return (
    <div
      onClick={() => {
        props.setCurrentProduct({ newProduct: props.strain });
        props.setBrandIndex(
          props.shop.brands.findIndex((brand, index) => {
            return brand.name.toLowerCase() === props.strain.company.name;
          })
        );
        Router.push(
          "/product",
          "/product/" + props.strain.alias.toLowerCase().replace(/ /g, "")
        );
        window.scrollTo(0, 0);
      }}
      className="vcProduct-item p-2 flex rotate-item cursor-pointer"
    >
      <article className="w-full hover:text-white">
        <div className="min-h-350 flex items-end">
          <img className="mx-auto" src={img} alt={props.strain.alias} />
        </div>
        <header className="vcProduct-info flex flex-col">
          {/* <Link
            href="/product"
            // as={
            // }
          > */}
          <h2 className="my-2 cursor-pointer text-shadow text-white">
            {props.strain.alias}
          </h2>
          {/* </Link> */}
          {/* <div className="vcProduct-info flex flex-row justify-between">
            <h3 className="vcProduct-cat">{props.strain.type}</h3>
            <p className={"vcProduct-price " + props.priceColor}>
              from ${props.strain.price[1]}
            </p>
          </div> */}
        </header>
      </article>

      {/* <a href="">
        <img
          className="quick-view"
          title="quick view"
          src="../static/img/assets/icons/quick-view.svg"
          alt="quick view"
        />
      </a> */}
    </div>
  );
};
export default productItem;
