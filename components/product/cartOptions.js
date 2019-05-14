import Link from "next/link";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cartOptions = props => {
  let currentProduct = props.product.currentProduct,
    cart = props.checkout.cart,
    maxPerPackage = cart.maxPerPackage,
    potentialQuantity = cart.potentialQuantity,
    coupon = props.checkout.orderDetails.coupon;

  return (
    <React.Fragment>
      <div className="vcSingle-input flex flex-col justify-around items-center">
        <input
          type="number"
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
        <button
          className="px-6 p-3 text-center vcBuyNow-button text-lg"
          type="submit"
          // value="Add To Cart"
          onClick={() => {
            if (props.account.currentUser == null) {
              props.toggleAlert({
                message: "Please log in to continue",
                message2: "You have to be logged in to do that",
                action: "login", //Router.push("/login"),
                actionName: "Login"
              });
            } else {
              let _identifier =
                currentProduct.sotiId +
                currentProduct.size[props.product.quickAddToCartQty];
              props.modifyCart({
                cart: cart,
                action: "APPEND",
                max: maxPerPackage,
                productIdentifier: _identifier,
                product: currentProduct,
                quantity: potentialQuantity,
                coupon: coupon
              });
            }
          }}
        >
          Add to Cart
        </button>
      </div>
      <Link prefetch href="/checkout">
        <div className="text-center flex justify-center w-full">
          <button
            className="px-6 p-3 text-center vcBuyNow-button text-lg"
            onClick={() => {
              if (props.account.currentUser == null) {
                props.toggleAlert({
                  message: "Please log in to continue",
                  message2: "You have to be logged in to do that",
                  action: "login", //Router.push("/login"),
                  actionName: "Login"
                });
              } else {
                props.setBrandIndex(0);
                let _identifier =
                  currentProduct.sotiId +
                  currentProduct.size[props.product.quickAddToCartQty];
                props.modifyCart({
                  cart: cart,
                  action: "APPEND",
                  max: maxPerPackage,
                  productIdentifier: _identifier,
                  product: currentProduct,
                  quantity: potentialQuantity,
                  coupon: coupon
                });
              }
            }}
          >
            Buy Now
          </button>
        </div>
      </Link>

      <div className="vcShop-buttons flex flex-row justify-between">
        <Link prefetch href="/shop">
          <button
            onClick={() => {
              props.setBrandIndex(0);
            }}
          >
            Continue Shopping
          </button>
        </Link>
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
                product: currentProduct,
                quantity: cart.potentialQuantity,
                packSize: currentProduct.size[props.product.quickAddToCartQty]
              });
            }
          }}
          className="vcSaveItem-btn"
        >
          <span className="font-bold text-white">Save Item</span>
          <FontAwesomeIcon
            icon={faHeart}
            className={`${
              props.account != null ||
              (props.account.currentUser.savedItems != null &&
                props.account.currentUser.savedItems.length < 1)
                ? "text-red"
                : "text-white opacity-50 "
            } ml-2 fa-lg`}
          />{" "}
        </button>
      </div>
    </React.Fragment>
  );
};

export default cartOptions;
