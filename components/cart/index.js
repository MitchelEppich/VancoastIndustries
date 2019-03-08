import Link from "next/link";
import Summary from "./summary";
import Items from "./items";

const index = props => {
  return (
    <div id="vcNav-cartList" className={props.misc.showCart ? "show" : ""}>
      <div className="vcNav-cartWrap">
        <div className="vcCart-title">Cart</div>
        <Items {...props} />
        <Summary
          totalItems={Object.keys(props.checkout.cart.items).length}
          total={props.checkout.cart.price}
          {...props}
        />
      </div>
      <Link prefetch href="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
};
export default index;
