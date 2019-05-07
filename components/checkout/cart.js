const cart = props => {
  let items = Object.entries(props.checkout.cart.items).map((item, index) => {
    let product = item[1].product;
    let img =
      product.company.name == "sonoma seeds"
        ? "../static/img/products/sonoma/so-blue-diesel.jpg"
        : product.company.name == "crop king seeds"
        ? "../static/img/products/cks/cks-white-widow-auto.png"
        : "../static/img/products/sunwest/sw-cheese.png";
    return (
      <li className="vcItem vcItem-one flex items-end">
        <img src={img} alt="bruce banner" />

        <div className="vcItem-info flex flex-col justify-around items-start">
          <h2>{product.name}</h2>
          <h3 className="vcCheckout-cat">{product.type}</h3>
          <div className="vcItem-brand capitalize">
            <span>Brand -</span>
            {product.company.name}
          </div>

          <div className="vcItem-details flex flex-row justify-start">
            <div className="vcItem-qty flex flex-col">
              <span className="vcPrefix">QTY.</span>
              <span>x{item[1].quantity}</span>
            </div>

            <div className="vcItem-price flex flex-col">
              <span className="vcPrefix">Price</span>
              <span>${item[1].price}</span>
            </div>
          </div>
        </div>
      </li>
    );
  });
  return (
    <React.Fragment>
      <div className="vcCheckout-content">
        <ul className="vcCheckout-list flex flex-row justify-center lg:justify-start items-baseline">
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
          type="submit"
          className="vcCheckout-btn"
          value="Shipping"
        />
      ) : null}
    </React.Fragment>
  );
};
export default cart;
