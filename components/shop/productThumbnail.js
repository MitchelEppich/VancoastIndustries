import Link from "next/link";
import Router from "next/router";
import QuickView from "../product/quickView";

const productThumbnail = props => {
  let showQuickViewCondition =
    props.shop.quickViewProduct != null &&
    props.strain == props.product.currentProduct;

  let img =
    props.strain.company.name == "sonoma seeds"
      ? "../static/img/products/sonoma/so-blue-diesel.jpg"
      : props.strain.company.name == "crop king seeds"
      ? "../static/img/products/cks/cks-white-widow-auto.png"
      : "../static/img/products/sunwest/sw-cheese.png";

  return (
    <div
      className={`vcProduct-item p-2 flex relative ${
        showQuickViewCondition ? "fixed z-50" : " scale-item"
      }`}
    >
      {showQuickViewCondition ? <QuickView {...props} /> : null}

      <div
        onClick={() => {
          window.scrollTo(0, 0);
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
        }}
      >
        <article className="w-full">
          <img
            className="h-auto w-250 mx-auto"
            src={img}
            alt={props.strain.alias}
          />
          <header className="vcProduct-info flex flex-col">
            {/* <Link
            href="/product"
            // as={

            // }
          > */}
            <h2 className="my-3 cursor-pointer text-left">
              {props.strain.alias}
            </h2>
            {/* </Link> */}
            <div className="vcProduct-info flex flex-row justify-between">
              <h3 className="vcProduct-cat">{props.strain.type}</h3>
              <p className={"vcProduct-price " + props.priceColor}>
                from ${props.strain.wholesale[0]}
              </p>
            </div>
          </header>
        </article>
        {props.router.asPath.includes("shop") ? (
          <a
            onClick={e => {
              e.stopPropagation();
              props.toggleModal(props.strain);
            }}
          >
            <img
              className="quick-view"
              title="quick view"
              src="../static/img/assets/icons/quick-view.svg"
              alt="quick view"
            />
          </a>
        ) : null}
      </div>
    </div>
  );
};
export default productThumbnail;
