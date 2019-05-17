import AddressModule from "../account/address";

const billing = props => {
  let account = props.account.currentUser;
  let billing = account == null ? null : account.billing;

  return (
    <React.Fragment>
      <div className="vcCheckout-content">
        <form
          id="billingForm"
          onSubmit={e => {
            e.preventDefault();
            let tags = {
              address: "BillAddress",
              city: "BillCity",
              country: "BillCountry",
              email: "BillEmail",
              name: "BillFirstName",
              surname: "BillLastName",
              phone: "BillPhone",
              postal: "BillPostalZipCode",
              state: "BillState",
              apartment: "BillApartment"
            };
            props.changeStep("Payment");
            window.scrollTo(0, 0);

            let object = {};
            let address = billing[account.defaultShipping];

            for (let key of Object.keys(address)) {
              object[key] = { value: address[key], tag: tags[key] };
            }

            let _orderDetails = props.checkout.orderDetails;

            props.modifyOrderDetails({
              ..._orderDetails,
              billing: object
            });
          }}
        >
          <AddressModule {...props} addresses={billing} type="billing" />
          <input type="submit" className="vcCheckout-btn" value="Payment" />
        </form>
      </div>
    </React.Fragment>
  );
};

export default billing;
