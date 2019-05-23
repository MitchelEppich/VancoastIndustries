import Cart from "./cart";
import SelectedPayment from "./selectedPayment";
import Router from "next/router";

const payment = props => {
  if (!props.account.currentUser) return null;
  let billing = props.account.currentUser.billing[0];
  let shipping = props.account.currentUser.shipping[0];
  return (
    <React.Fragment>
      <div className="flex justify-between w-full my-4 md:flex-col sm:flex-col">
        <div className="w-1/2 sm:w-full sm:mx-auto md:mx-auto md:w-full sm:my-4 md:my-4 border rounded border-grey-lightest p-4 mr-3">
          <h2 className="text-3xl font-bold text-grey-lightest">
            Delivery Details
          </h2>

          <div className="capitalize px-8 mt-4 font-bold text-lg leading-normal">
            <div>
              <span className="vcShipping-name">{shipping.name}</span>
              <span className="vcShipping-name ml-2">{shipping.surname}</span>
            </div>

            <div>
              <span className="vcShipping-street">
                {shipping.address}, {shipping.apartment}
              </span>
            </div>

            <div>
              <span className="vcShipping-city">{shipping.city}</span>
              {", "}
              <span className="vcShipping-province">{shipping.state}</span>
            </div>

            <div>
              <span className="vcShipping-country">{shipping.country}</span>
              {" - "}
              <span className="vcShipping-code">{shipping.postal}</span>
            </div>

            <div>
              <span className="vcShipping-phone">{shipping.phone}</span>
            </div>
          </div>
        </div>

        <div className="w-1/2 sm:w-full sm:mx-auto md:mx-auto md:w-full sm:my-4 md:my-4 border rounded border-grey-lightest p-4 ml-3">
          <h2 className="text-3xl font-bold text-grey-lightest">
            Billing Details
          </h2>

          <div className="capitalize px-8 mt-4 font-bold text-lg leading-normal">
            <div>
              <span className="vcBilling-name">{billing.name}</span>
              <span className="vcBilling-name">{billing.surname}</span>
            </div>

            <div>
              <span className="vcBilling-street">
                {billing.address}, {billing.apartment}
              </span>
            </div>

            <div>
              <span className="vcBilling-city">{billing.city}</span>
              {", "}
              <span className="vcBilling-province">{billing.state}</span>
            </div>

            <div>
              <span className="vcBilling-country">{billing.country}</span>
              {" - "}
              <span className="vcBilling-code">{billing.postal}</span>
            </div>

            <div>
              <span className="vcBilling-phone">{billing.phone}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="vcCheckout-content flex flex-col justify-around">
        <div className="vcSummary">
          <h2 className="text-3xl font-bold text-grey-lightest">
            Cart Summary
          </h2>

          <Cart page="payment" {...props} />
        </div>
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (
            props.checkout.orderDetails.payment &&
            props.checkout.orderDetails.payment.method
          ) {
            if (props.checkout.orderDetails.payment.method.value.length > 0) {
              window.scrollTo(0, 0);
              props.processOrder({
                customerId: props.account.currentUser.customerId,
                _id: props.account.currentUser._id,
                cart: props.checkout.cart,
                orderDetails: props.checkout.orderDetails
              });
              Router.push("/confirmation");
            }
          } else {
            props.toggleAlert({
              message: "Please select a payment method!",
              message2: "You must select a payment method to proceed.",
              action: null,
              actionName: null
            });
          }
        }}
        onChange={e => {
          let selection = document.querySelector(
            'input[name="paymentOptions"]:checked'
          ).value;

          let _orderDetails = props.checkout.orderDetails;

          props.modifyOrderDetails({
            ..._orderDetails,
            payment: {
              ...(_orderDetails.payment || {}),
              method: { value: selection, tag: "Payment_Method" }
            }
          });
        }}
      >
        <div className="vcPayment-method">
          <h2 className="text-3xl font-bold text-grey-lightest">
            Payment Method
          </h2>

          <div className="vcPayment-choices flex flex-row sm:flex-col md:flex-col justify-center items-center">
            <div className="mx-1">
              <input
                type="radio"
                id="CashMoney"
                name="paymentOptions"
                value="CashCheque"
              />
              <label className="flex flex-col" htmlFor="CashMoney">
                <span>Cash</span>
                <img
                  style={{ width: "auto" }}
                  src="../../../static/img/assets/payment/cash-icon.jpg"
                  className="h-10"
                />
              </label>
            </div>

            <div className="mx-1">
              <input
                type="radio"
                id="E-Transfer"
                name="paymentOptions"
                value="E-Transfer"
              />
              <label className="flex flex-col" htmlFor="E-Transfer">
                <span>E-Transfer</span>
                <img
                  style={{ width: "auto" }}
                  src="../../../static/img/assets/payment/interac-transfer.jpg"
                  className="h-10"
                />
              </label>
            </div>
          </div>

          <SelectedPayment {...props} />
        </div>

        <input type="submit" className="vcCheckout-btn" value="Place Order" />
      </form>
    </React.Fragment>
  );
};
export default payment;
