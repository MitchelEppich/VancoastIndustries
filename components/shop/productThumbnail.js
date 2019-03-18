import Link from "next/link";
import Router from "next/router";

const productThumbnail = props => {
  return (
    <div className="vcProduct-item p-2 flex">
      <article className="w-full">
        <img
          className="h-200 mx-auto"
          src={props.strain.packagePath}
          alt={props.strain.name}
        />
        <header className="vcProduct-info flex flex-col">
          {/* <Link
            href="/product"
            // as={

            // }
          > */}
          <h2
            onClick={() => {
              props.setCurrentProduct({ product: props.strain });
              props.setBrandIndex(
                props.shop.brands.findIndex((brand, index) => {
                  return brand.name.toLowerCase() === props.strain.company[0];
                })
              );
              Router.push(
                "/product",
                "/product#" + props.strain.name.toLowerCase().replace(/ /g, "")
              );
              window.scrollTo(0, 0);
            }}
            className="my-4 cursor-pointer"
          >
            {props.strain.name}
          </h2>
          {/* </Link> */}
          <div className="vcProduct-info flex flex-row justify-between">
            <h3 className="vcProduct-cat">{props.strain.type}</h3>
            <p className={"vcProduct-price " + props.priceColor}>
              from ${props.strain.price[1]}
            </p>
          </div>
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
export default productThumbnail;
