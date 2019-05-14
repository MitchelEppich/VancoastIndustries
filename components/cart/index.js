import Link from "next/link";
import Summary from "./summary";
import Items from "./items";

const index = props => {
  return (
    <div id="vcNav-cartList" className={props.misc.showCart ? "show" : ""}>
      <div
        onClick={() => props.toggleCart(!props.misc.showCart)}
        className="vcCart-title uppercase opacity-50"
      >
        My Box
      </div>
      <Items {...props} />
      <div className="absolute pin-b w-full shadow-lg">
        <Summary
          totalItems={Object.keys(props.checkout.cart.items || {}).length}
          total={props.checkout.cart.price}
          {...props}
        />
        <Link prefetch href="/checkout">
          <button
            onClick={e => {
              if (props.account.currentUser == null) {
                e.preventDefault();
                props.toggleAlert({
                  message: "Please log in to continue",
                  message2: "You have to be logged in to do that",
                  action: "login", //Router.push("/login"),
                  actionName: "Login"
                });
              } else if (Object.entries(props.checkout.cart.items).length < 1) {
                e.preventDefault();
                props.toggleAlert({
                  message: "Your cart is empty!",
                  message2: "Please add to your cart",
                  action: "shop", //Router.push("/shop"),
                  actionName: "Shop"
                });
              } else {
                props.toggleCart(false);
              }
            }}
          >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};
export default index;
