import AddressModule from "../account/address"

const shipping = props => {
  let account = props.account.currentUser;
  let shipping = account == null ? null : account.shipping;

  return (
    <React.Fragment>
      <form
        id="shippingForm"
        onSubmit={e => {
          e.preventDefault();
          let tags = {
            address: "ShipAddress1",
            city: "ShipCity",
            country: "ShipCountry",
            email: "ShipEmail",
            name: "ShipFirstName",
            surname: "ShipLastName",
            phone: "ShipPhoneNum",
            postal: "ShipPostal_Zip_Code",
            state: "ShipState",
            apartment: "ShipApartment"
          };
          props.changeStep("Billing");
          window.scrollTo(0, 0);

          let object = {}
          let address = shipping[account.defaultShipping]

          for (let key of Object.keys(address)) {
            object[key] = { value: address[key], tag: tags[key] };
          }

          let _orderDetails = props.checkout.orderDetails;

          props.modifyOrderDetails({
            ..._orderDetails,
            shipping: object
          });
        }}
      >
        <AddressModule {...props} addresses={shipping} type="shipping" />
        <input type="submit" className="vcCheckout-btn" value="Billing" />
      </form>
    </React.Fragment>
  );
};
export default shipping;
