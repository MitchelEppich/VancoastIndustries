import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const cart = props => {
  let item = props.item;
  let items = Object.entries(props.checkout.cart.items).map((item, index) => {
    let product = item[1].product;
    let img =
      product.company.name == "sonoma seeds"
        ? "../static/img/products/sonoma/so-blue-diesel.jpg"
        : product.company.name == "crop king seeds"
        ? "../static/img/products/cks/cks-white-widow-auto.png"
        : "../static/img/products/sunwest/sw-cheese.png";
    return (
      <li key={index} className="vcItem flex items-end relative mx-4 my-4">
        <div className="w-full inline-flex">
          <div className="h-150">
            <img src={img} alt="bruce banner" style={{ maxHeight: "150px" }} />
          </div>

          <div className="vcItem-info h-150 ml-4 flex flex-col justify-around items-start">
            <h2 className="uppercase text-lg">{product.alias}</h2>
            <h3 className="vcCheckout-cat">{product.type}</h3>
            <div className="vcItem-brand capitalize mt-2">
              <span className="uppercase">Brand - </span>
              <span>{product.company.name}</span>
            </div>

            <div className="vcItem-details flex flex-row justify-between mt-2">
              <div className="vcItem-qty flex flex-col">
                <span className="vcPrefix">QTY.</span>
                <span>x{item[1].quantity}</span>
              </div>
              <div className="vcItem-qty flex flex-col">
                <span className="vcPrefix">Pack Size</span>
                <span>{item[1].amount} Seeds</span>
              </div>

              <div className="vcItem-price flex flex-col">
                <span className="vcPrefix">Price</span>
                <span>${item[1].price.toFixed(2)}</span>
              </div>
            </div>
            <div className="w-full mt-2">
              <div
                onClick={() => {
                  let _identifier = item[0];

                  let user = props.account.currentUser;
                  props.modifyCart({
                    accountId: user == null ? null : user._id,
                    items: props.checkout.cart.items,
                    product: product,
                    action: "REMOVE",
                    max: props.checkout.cart.maxPerPackage,
                    productIdentifier: _identifier,
                    cart: props.checkout.cart
                  });
                }}
                className="w-200 cursor-pointer hover:bg-blue-light bg-blue p-2 px-6 text-white rounded text-center slow"
              >
                Delete
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  });
  return (
    <React.Fragment>
      <div className={props.page == "payment" ? "" : "vcCheckout-content"}>
        <ul className="vcCheckout-list flex flex-row justify-center lg:justify-start items-center">
          {items}
        </ul>

        <div className="vcCheckout-totals flex flex-col justify-around items-center">
          <div className="vcCheckout-subtotal">
            Subtotal: <span>${props.checkout.cart.price.toFixed(2)}</span>
          </div>
          {props.tax != null ? (
            <div className="vcCheckout-taxes">
              Taxes: <span>${props.tax.toFixed(2)}</span>
            </div>
          ) : null}
          {props.shipping != null ? (
            <div className="vcCheckout-taxes">
              Shipping: <span>${props.shipping.toFixed(2)}</span>
            </div>
          ) : null}
          {props.total != null ? (
            <div className="vcCheckout-total">
              Total:{" "}
              <span>
                $
                {(
                  props.checkout.cart.price +
                  props.tax +
                  props.shipping
                ).toFixed(2)}
              </span>
            </div>
          ) : null}
        </div>
      </div>

      {props.page == "cart" ? (
        <input
          onClick={() => {
            props.changeStep("Shipping");
            window.scrollTo(0, 0);
          }}
          type="button"
          className="vcCheckout-btn"
          value="Shipping"
        />
      ) : null}
    </React.Fragment>
  );
};
export default cart;
