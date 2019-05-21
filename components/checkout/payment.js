import Cart from "./cart";
import SelectedPayment from "./selectedPayment";
import Router from "next/router";

const payment = props => {
  let billing = props.account.currentUser.billing[0];
  let shipping = props.account.currentUser.shipping[0];
  return (
    <React.Fragment>
      <div className="flex justify-between w-full my-4 md:flex-col sm:flex-col">
        <div className="w-1/2 sm:w-full md:w-full sm:my-4 md:my-4 border rounded border-grey-lightest p-4 mr-3">
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

        <div className="w-1/2 sm:w-full md:w-full sm:my-4 md:my-4 border rounded border-grey-lightest p-4 ml-3">
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

          <Cart page="payment" {...props} tax={0} shipping={0} total={true} />
        </div>
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (props.checkout.orderDetails.payment) {
            if (props.checkout.orderDetails.payment.method.value.length > 0) {
              window.scrollTo(0, 0);
              Router.push("/confirmation");
            }
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

          <div className="vcPayment-choices flex flex-row sm:flex-col md:flex-col justify-around items-center">
            <input
              type="radio"
              id="CashMoney"
              name="paymentOptions"
              value="Cash"
            />
            <label className="flex flex-col" htmlFor="CashMoney">
              <span>Cash</span>
              <img
                style={{ width: "auto" }}
                src="../../../static/img/assets/payment/cash-icon.jpg"
                className="h-10"
              />
            </label>

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

            <input
              type="radio"
              id="Cheque"
              name="paymentOptions"
              value="Cheque"
            />
            <label className="flex flex-col" htmlFor="Cheque">
              <span>Cheque</span>
              <img
                src="../../../static/img/assets/payment/interac-transfer.jpg"
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
