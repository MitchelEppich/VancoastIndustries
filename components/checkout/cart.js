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
        <div className="w-full inline-flex sm:flex-col flex">
          <div className="h-150 sm:flex sm:justify-center sm:my-2">
            <img src={img} alt="bruce banner" style={{ maxHeight: "150px" }} />
          </div>

          <div className="vcItem-info h-150 sm:ml-0 ml-4 flex flex-col justify-around items-start">
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
        <ul className="vcCheckout-list flex flex-row justify-center lg:justify-start sm:my-4 items-center sm:border sm:border-grey-lightest p-2">
          {items}
        </ul>

        <div className="vcCheckout-totals flex flex-col justify-around items-center">
          <div className="w-full inline-flex">
            <div className="w-1/2 text-right mr-2">Subtotal: </div>{" "}
            <div className="w-1/2 text-left ml-2 font-normal">
              ${props.checkout.cart.price.toFixed(2)}
            </div>
          </div>
          {props.tax != null ? (
            <div className="w-full inline-flex">
              <div className="w-1/2 text-right mr-2"> Taxes: </div>{" "}
              <div className="w-1/2 text-left ml-2 font-normal">
                ${props.tax.toFixed(2)}
              </div>
            </div>
          ) : null}
          {props.shipping != null ? (
            <div className="w-full inline-flex">
              <div className="w-1/2 text-right mr-2"> Shipping: </div>{" "}
              <div className="w-1/2 text-left ml-2 font-normal">
                ${props.shipping.toFixed(2)}
              </div>
            </div>
          ) : null}
          {props.total != null ? (
            <div className="w-full inline-flex">
              <div className="w-1/2 text-right mr-2"> Total: </div>
              <div className="w-1/2 text-left ml-2 font-normal">
                $
                {(
                  props.checkout.cart.price +
                  props.tax +
                  props.shipping
                ).toFixed(2)}
              </div>
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
