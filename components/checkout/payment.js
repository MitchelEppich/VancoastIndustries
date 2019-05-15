import Cart from "./cart";
import SelectedPayment from "./selectedPayment";

const payment = props => {
  let shipping = props.checkout.orderDetails.shipping;
  let billing = props.checkout.orderDetails.billing;
  return (
    <React.Fragment>
      <div className="vcBill-ship flex">
        <div className="vcShipping-details">
          <h2>Delivery Details</h2>

          <div>
            <span className="vcShipping-name">{shipping.firstName}</span>
            <span className="vcShipping-name">{shipping.lastName}</span>
          </div>

          <div>
            <span className="vcShipping-coName">{shipping.company}</span>
          </div>

          <div>
            <span className="vcShipping-eMail">{shipping.email}</span>
          </div>

          <div>
            <span className="vcShipping-street">{shipping.streetAddress}</span>
          </div>

          <div>
            <span className="vcShipping-city">{shipping.city}</span>{" "}
            <span className="vcShipping-province">
              {shipping.provinceState}
            </span>
          </div>

          <div>
            <span className="vcShipping-country">{shipping.country}</span>{" "}
            <span className="vcShipping-code">{shipping.postalZip}</span>
          </div>

          <div>
            <span className="vcShipping-phone">{shipping.phone}</span>
          </div>
        </div>

        <div className="vcBilling-details flex flex-col justify-center">
          <h2>Billing Details</h2>

          <div>
            <span className="vcBilling-name">{billing.firstName}</span>
            <span className="vcBilling-name">{billing.lastName}</span>
          </div>

          <div>
            <span className="vcBilling-coName">{billing.company}</span>
          </div>

          <div>
            <span className="vcBilling-eMail">{billing.email}</span>
          </div>

          <div>
            <span className="vcBilling-street">{billing.streetAddress}</span>
          </div>

          <div>
            <span className="vcBilling-city">{billing.city}</span>{" "}
            <span className="vcBilling-province">{billing.provinceState}</span>
          </div>

          <div>
            <span className="vcBilling-country">{billing.country}</span>{" "}
            <span className="vcBilling-code">{billing.postalZip}</span>
          </div>

          <div>
            <span className="vcBilling-phone">{billing.phone}</span>
          </div>
        </div>
      </div>

      <div className="vcCheckout-content flex flex-col justify-around">
        <div className="vcSummary">
          <h2>Cart Summary</h2>

          <Cart page="payment" {...props} tax={50} shipping={50} total={true} />
        </div>
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.changeStep("Confirmation");
          window.scrollTo(0, 0);
        }}
      >
        <div className="vcPayment-method">
          <h2>Payment Method</h2>

          <div className="vcPayment-choices flex flex-row sm:flex-col md:flex-col justify-around items-center">
            <input
              type="radio"
              id="CashMoney"
              name="paymentOptions"
              onClick={() => {
                props.modifyOrderDetails({
                  ...props.checkout.orderDetails,
                  payment: {
                    ...props.checkout.orderDetails.payment,
                    selectedOption: "cash"
                  }
                });
              }}
            />
            <label className="flex flex-col" htmlFor="CashMoney">
              <span>Cash</span>
              <img
                src="../../../static/img/assets/payment/cash-icon.jpg"
                className="h-10 w-auto sm:h-8"
              />
            </label>

            <input
              type="radio"
              id="Crypto"
              name="paymentOptions"
              onClick={() => {
                props.modifyOrderDetails({
                  ...props.checkout.orderDetails,
                  payment: {
                    ...props.checkout.orderDetails.payment,
                    selectedOption: "crypto"
                  }
                });
              }}
            />
            <label className="flex flex-col" htmlFor="Crypto">
              <span className="text-base">Cryptos</span>
              <img
                src="../../../static/img/assets/payment/crypto-icons.jpg"
                className="h-10 w-auto sm:h-8"
              />
            </label>

            <input
              type="radio"
              id="MoneyTransfer"
              name="paymentOptions"
              onClick={() => {
                props.modifyOrderDetails({
                  ...props.checkout.orderDetails,
                  payment: {
                    ...props.checkout.orderDetails.payment,
                    selectedOption: "emt"
                  }
                });
              }}
            />
            <label className="flex flex-col" htmlFor="MoneyTransfer">
              <span>Money Transfer</span>
              <img
                src="../../../static/img/assets/payment/interac-transfer.jpg"
                className="h-10 w-auto sm:h-8"
              />
            </label>

            <input
              type="radio"
              id="CreditCard"
              name="paymentOptions"
              onClick={() => {
                props.modifyOrderDetails({
                  ...props.checkout.orderDetails,
                  payment: {
                    ...props.checkout.orderDetails.payment,
                    selectedOption: "creditCard"
                  }
                });
              }}
            />
            <label className=" flex flex-col" htmlFor="CreditCard">
              <span>Credit Card</span>
              <img
                src="../../../static/img/assets/payment/visaMastercard-logo.jpg"
                className="h-10 w-auto sm:h-8"
              />
            </label>
          </div>

          <SelectedPayment {...props} />
        </div>

        <input type="submit" className="vcCheckout-btn" value="Place Order" />
      </form>
    </React.Fragment>
  );
};
export default payment;
