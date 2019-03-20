import Link from "next/link";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cartOptions = props => {
  let currentProduct = props.currentProduct,
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
          value={potentialQuantity}
          name="quantity"
        />
        <input
          className="vcSingle-submit"
          type="submit"
          value="Add To Cart"
          onClick={() => {
            let _identifier =
              currentProduct.sotiId +
              [20, 50, 100][props.product.quickAddToCartQty];
            props.modifyCart({
              cart: cart,
              action: "APPEND",
              max: maxPerPackage,
              productIdentifier: _identifier,
              product: currentProduct,
              quantity: potentialQuantity,
              coupon: coupon
            });
          }}
        />
      </div>
      <div className="w-full text-center">
        <button className="vcSaveItem-btn">
          {/* <FontAwesomeIcon
            icon={faStar}
            className="text-grey opacity-50 mr-2"
          />{" "} */}
          <span className="font-bold text-grey text-lg opacity-50">
            Add to Wish List
          </span>
        </button>
      </div>

      <div className="vcShop-buttons flex flex-row justify-between">
        <Link prefetch href="/shop">
          <button>Continue Shopping</button>
        </Link>
        <Link prefetch href="/checkout">
          <button>Checkout</button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default cartOptions;
