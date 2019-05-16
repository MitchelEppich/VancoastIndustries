import data from "../../static/data";

const billing = props => {
  let sameAsShipping = props.checkout.orderDetails.sameAsShipping;
  let shipping = props.checkout.orderDetails.shipping || {};
  // let billing = props.checkout.orderDetails.billing || {};

  let account = props.account.currentUser;
  let billing = account == null ? null : account.billing[0];
  let address = account == null ? null : account.address;

  let countries = data.countries.map((country, index) => {
    return (
      <option key={index} value={country}>
        {country}
      </option>
    );
  });
  countries.unshift(<option key={countries.length}>Select Country...</option>);
  let provinceOrState = [
    ...Object.entries(data.provincesCA),
    ...data.statesUS
  ].map((provinceEntry, index) => {
    let provinceName =
      typeof provinceEntry == "object" ? provinceEntry[0] : provinceEntry;
    return (
      <option key={index} value={provinceName}>
        {provinceName}
      </option>
    );
  });
  provinceOrState.unshift(
    <option key={provinceOrState.length}>Select State or Province...</option>
  );
  return (
    <React.Fragment>
      <div className="vcCheckout-content">
        <form
          id="shippingForm"
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
            const form = e.target;
            const formData = new window.FormData(form);
            let object = {};
            formData.forEach((value, key) => {
              object[key] = { value, tag: tags[key] };
            });

            let _orderDetails = props.checkout.orderDetails;

            props.modifyOrderDetails({
              ..._orderDetails,
              billing: object
            });
          }}
        >
          <div className="vcCheckout-content">
            <div className="vcWholesale-application flex flex-col justify-center">
              <div className="inline-flex w-full">
                <label htmlFor="vcName" className="w-1/2 mx-1">
                  First Name*
                  <input
                    type="text"
                    id="vcName"
                    name="name"
                    required
                    className="w-full"
                    placeholder="First Name"
                    defaultValue={billing != null ? billing.name : ""}
                  />
                </label>
                <label htmlFor="vcName" className="w-1/2 mx-1">
                  Last Name*
                  <input
                    type="text"
                    id="vcName"
                    name="surname"
                    required
                    className="w-full"
                    placeholder="Last Name"
                    defaultValue={billing != null ? billing.surname : ""}
                  />
                </label>
              </div>

              <div className="inline-flex w-full">
                <label htmlFor="vcEmail" className="w-2/3 mx-1">
                  Email Address*
                  <input
                    type="text"
                    id="vcEmail"
                    required
                    name="email"
                    className="w-full"
                    placeholder="you@companyname.com"
                    defaultValue={account != null ? account.email : ""}
                  />
                </label>
                <label htmlFor="vcPhone" className="w-1/3 mx-1">
                  Phone Number*
                  <input
                    type="text"
                    id="vcPhone"
                    name="phone"
                    className="w-full"
                    required
                    placeholder="555-555-5555"
                    defaultValue={billing != null ? billing.phone : ""}
                  />
                </label>
              </div>
              <div className="inline-flex w-full">
                <label htmlFor="vcStreet" className="w-1/2 mx-1">
                  Street Address*
                  <input
                    type="text"
                    id="vcStreet"
                    name="address"
                    className="w-full"
                    required
                    placeholder=""
                    defaultValue={billing != null ? billing.address : ""}
                  />
                </label>
                {console.log(billing.apartment)}
                <label htmlFor="vcApartment" className="w-1/2 mx-1">
                  Apartment
                  <input
                    type="text"
                    id="vcApartment"
                    name="apartment"
                    // required
                    className="w-full"
                    placeholder=""
                    defaultValue={billing != null ? billing.apartment : ""}
                  />
                </label>
              </div>
              <div className="inline-flex w-full">
                <label htmlFor="vcCity" className="w-1/2 mx-1">
                  City*
                  <input
                    type="text"
                    id="vcCity"
                    name="city"
                    required
                    className="w-full"
                    placeholder=""
                    defaultValue={billing != null ? billing.city : ""}
                  />
                </label>

                <label htmlFor="vcProvince" className="w-1/2 mx-1">
                  Province/State
                  <input
                    type="text"
                    required
                    id="vcProvince"
                    className="w-full"
                    name="state"
                    defaultValue={billing != null ? billing.state : ""}
                  />
                </label>
              </div>

              <div className="inline-flex w-full">
                <label htmlFor="vcCountry" className="w-1/2 mx-1">
                  Country*
                  <select
                    className="vcCountry"
                    required
                    className="w-full"
                    name="country"
                    defaultValue={billing != null ? billing.country : ""}
                  >
                    {countries}
                  </select>{" "}
                </label>

                <label htmlFor="vcPostal" className="w-1/2 mx-1">
                  Postal Code/Zip Code*
                  <input
                    type="text"
                    id="vcPostal"
                    required
                    className="w-full"
                    name="postal"
                    placeholder=""
                    defaultValue={billing != null ? billing.postal : ""}
                  />
                </label>
              </div>
            </div>
          </div>

          <input type="submit" className="vcCheckout-btn" value="Payment" />
        </form>
      </div>
    </React.Fragment>
  );
};

export default billing;
