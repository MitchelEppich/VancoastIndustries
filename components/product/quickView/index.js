import SeedSelect from "../seedSelect";
import Link from "next/link";
import SeedSelectorMobile from "../seedSelectorMobile";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { stringBuilder } from "../../../scripts/savedItems";
import Router from "next/router";

const index = props => {
  let product = props.shop.quickViewModal,
    cart = props.checkout.cart,
    maxPerPackage = cart.maxPerPackage,
    potentialQuantity = cart.potentialQuantity,
    coupon = props.checkout.orderDetails.coupon;
  let productAsSavedItemString = stringBuilder({
    product: product,
    packSize: product.size[props.product.quickAddToCartQty],
    quantity: potentialQuantity
  });
  let itemSaved = props.account.currentUser
    ? props.account.currentUser.savedItems.includes(productAsSavedItemString)
    : false;
  return (
    <div className="w-screen h-screen bg-semi-transparent z-50 fixed">
      <div className="vcSingle vcQuick flex justify-center items-center">
        <div className="bg-white w-500 md:w-400 sm:w-300 relative vcQuick flex flex-col justify-center items-start">
          <header
            onClick={() => {
              window.scrollTo(0, 0);
              props.toggleModal(null);
              props.setCurrentProduct({ newProduct: product });
              props.setBrandIndex(
                props.shop.brands.findIndex((brand, index) => {
                  return brand.name.toLowerCase() === product.company.name;
                })
              );
              Router.push(
                "/product",
                "/product/" + product.alias.toLowerCase().replace(/ /g, "")
              );
            }}
            className="vcSingle-intro flex justify-center items-center flex-col w-full"
          >
            <img
              className="sm:hidden h-200"
              src="../static/img/products/sunwest/single-front/sw-kali-mist-406x412.png"
              alt="kali mist"
            />
            <h1 className="flex items-center justify-center">
              {product.alias}
            </h1>
            <h3 className="vcProduct-cat">{product.type}</h3>
          </header>
          <SeedSelect {...props} />
          <SeedSelectorMobile {...props} />

          <div className="vcSingle-input flex sm:flex-row flex-col justify-around items-center">
            <input
              type="number"
              className="mx-1"
              min="1"
              onBlur={e => {
                let _value = e.target.value;
                if (_value == null || _value == "" || parseInt(_value) < 1) {
                  props.modifyPotentialQuantity({
                    potentialQuantity: potentialQuantity,
                    action: "SET",
                    max: maxPerPackage,
                    quantity: 1
                  });
                }
              }}
              onChange={e => {
                let _value = e.target.value;
                props.modifyPotentialQuantity({
                  potentialQuantity: potentialQuantity,
                  action: "SET",
                  max: maxPerPackage,
                  quantity: parseInt(_value),
                  cart: cart
                });
              }}
              defaultValue="1"
              name="quantity"
            />

            <input
              className={`cSingle-submit mx-1 ${
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
                  let _identifier =
                    product.sotiId +
                    product.size[props.product.quickAddToCartQty];
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

          <div className="vcShop-buttons flex flex-row justify-between">
            <button
              onClick={() => {
                if (props.account.currentUser == null) {
                  props.toggleAlert({
                    message: "Please log in to continue",
                    message2: "You have to be logged in to do that",
                    action: "login", //Router.push("/login"),
                    actionName: "Login"
                  });
                } else {
                  props.addToWishList({
                    currentUser: props.account.currentUser,
                    product: product,
                    quantity: cart.potentialQuantity,
                    packSize: product.size[props.product.quickAddToCartQty]
                  });
                }
              }}
              className="vcSaveItem-btn"
            >
              <span className="font-bold text-white">
                {itemSaved ? "Saved" : "Save for Later"}
              </span>
              <FontAwesomeIcon
                icon={faHeart}
                className={`${
                  itemSaved ? "text-red" : "text-white opacity-50 "
                } ml-2 fa-lg`}
              />
            </button>
            <Link prefetch href="/checkout">
              <button
                onClick={e => {
                  props.toggleModal(null);
                  if (props.account.currentUser == null) {
                    e.preventDefault();
                    props.toggleAlert({
                      message: "Please log in to continue",
                      message2: "You have to be logged in to do that",
                      action: "login", //Router.push("/login"),
                      actionName: "Login"
                    });
                  }
                  if (Object.entries(props.checkout.cart.items).length < 1) {
                    e.preventDefault();
                    props.toggleAlert({
                      message: "Your cart is empty!",
                      message2: "Please add to your cart",
                      action: "shop", //Router.push("/shop"),
                      actionName: "Shop"
                    });
                  }
                }}
              >
                Checkout
              </button>
            </Link>
          </div>

          <a onClick={() => props.toggleModal(null)}>
            <img
              className="quick-view cursor-pointer"
              title="quick view"
              src="../static/img/assets/icons/quick-view.svg"
              alt="quick view"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
