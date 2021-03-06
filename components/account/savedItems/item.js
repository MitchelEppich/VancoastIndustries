import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";

const index = props => {
  // console.log(props.strain);
  let img =
    props.item.company.name == "sonoma seeds"
      ? "../static/img/products/sonoma/so-blue-diesel.jpg"
      : props.item.company.name == "crop king seeds"
      ? "../static/img/products/cks/cks-white-widow-auto.png"
      : "../static/img/products/sunwest/sw-cheese.png";

  let price =
    props.item.wholesale[props.item.size.indexOf(props.item.packSize)] *
    props.item.quantity;
  let product = props.item,
    cart = props.checkout.cart,
    maxPerPackage = cart.maxPerPackage,
    potentialQuantity = props.item.quantity,
    coupon = props.checkout.orderDetails.coupon;

  return (
    <li className="vcItem vcItem-one flex relative">
      <div className="w-full flex justify-end absolute pin-r pin-t mt-6 ">
        <FontAwesomeIcon
          onClick={() => {
            props.modifySavedItems({
              currentUser: props.account.currentUser,
              remove: true,
              product: props.item,
              quantity: props.item.quantity,
              packSize: props.item.packSize
            });
          }}
          icon={faTimes}
          className="fa-lg hover:text-blue text-grey-light cursor-pointer"
        />
      </div>
      <img
        className="cursor-pointer scale-item"
        onClick={() => {
          window.scrollTo(0, 0);
          props.setCurrentProduct({ newProduct: props.item });
          props.setBrandIndex(
            props.shop.brands.findIndex((brand, index) => {
              return brand.name.toLowerCase() === props.item.company.name;
            })
          );
          Router.push(
            "/product",
            "/product/" + props.item.alias.toLowerCase().replace(/ /g, "")
          );
        }}
        src="../static/img/products/sonoma/so-bruce-banner.jpg"
        alt="bruce banner"
      />

      <div className="vcItem-info flex flex-col justify-around items-start">
        <h2 className="capitalize">{props.item.alias}</h2>
        <h3 className="vcSaved-cat">{props.item.type}</h3>
        <div className="vcSaved-brand capitalize">
          <span className="uppercase font-bold">Brand - </span>
          {props.item.company.name}
        </div>

        <div className="vcItem-details flex flex-row justify-start">
          <div className="vcItem-qty flex flex-col">
            <span className="vcPrefix">QTY.</span>
            <span>x{props.item.quantity}</span>
          </div>
          <div className="vcItem-qty flex flex-col">
            <span className="vcPrefix">Pack Size</span>
            <span>{props.item.packSize} Seeds</span>
          </div>

          <div className="vcItem-price flex flex-col">
            <span className="vcPrefix">Price</span>
            <span>${price.toFixed(2)}</span>
          </div>
        </div>
        <input
          className={`px-2 py-1 mx-1 ${
            props.shop.animationActive ? "scaleAnim" : ""
          }`}
          type="submit"
          value="Add To Cart"
          onClick={() => {
            if (props.account.currentUser == null) {
              props.toggleAlert({
                message: "Please log in to continue",
                message2: "You have to be logged in to do that",
                action: "login", //Router.push("/login"),
                actionName: "Login"
              });
            } else {
              props.toggleAnimation(true);
              let _identifier = product.sotiId + product.packSize;
              let user = props.account.currentUser;
              props.modifyCart({
                accountId: user == null ? null : user._id,
                cart: cart,
                action: "APPEND",
                max: maxPerPackage,
                productIdentifier: _identifier,
                product: product,
                quantity: potentialQuantity,
                coupon: coupon
              });
              setTimeout(() => props.toggleAnimation(false), 1000);
            }
          }}
          onAnimationEnd={() => props.toggleAnimation(false)}
        />
      </div>
    </li>
  );
};

export default index;
