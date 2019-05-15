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
              apartment: "BillAppartment"
            };
            props.changeStep("Payment");
            window.scrollTo(0, 0);
            const form = e.target;
            const formData = new window.FormData(form);
            var object = {};
            formData.forEach((value, key) => {
              object[key] = { value, tag: tags[key] };
            });
          }}
        >
          <div className="vcCheckout-content">
            <div className="vcWholesale-application flex flex-col justify-center">
              <label htmlFor="vcName">Name*</label>
              <input
                type="text"
                id="vcName"
                name="name"
                required
                placeholder="First Name"
                defaultValue={billing != null ? billing.name : ""}
              />
              <input
                type="text"
                id="vcName"
                name="surname"
                required
                placeholder="Last Name"
                defaultValue={billing != null ? billing.surname : ""}
              />

              <label htmlFor="vcEmail">Email Address*</label>
              <input
                type="text"
                id="vcEmail"
                required
                name="email"
                placeholder="you@companyname.com"
                defaultValue={account != null ? account.email : ""}
              />

              <label htmlFor="vcStreet">Street Address*</label>
              <input
                type="text"
                id="vcStreet"
                name="address"
                required
                placeholder=""
                defaultValue={billing != null ? billing.address : ""}
              />

              <label htmlFor="vcApartment">Apartment*</label>
              <input
                type="text"
                id="vcApartment"
                name="apartment"
                required
                placeholder=""
                defaultValue={billing != null ? billing.apartment : ""}
              />

              <label htmlFor="vcCity">City*</label>
              <input
                type="text"
                id="vcCity"
                name="city"
                required
                placeholder=""
                defaultValue={billing != null ? billing.city : ""}
              />

              <label htmlFor="vcProvince">Province/State</label>
              <input
                type="text"
                required
                id="vcProvince"
                name="state"
                defaultValue={billing != null ? billing.state : ""}
              />

              <label htmlFor="vcCountry">Country*</label>
              <select
                className="vcCountry"
                required
                name="country"
                defaultValue={billing != null ? billing.country : ""}
              >
                {countries}
              </select>

              <label htmlFor="vcPostal">Postal Code/Zip Code*</label>
              <input
                type="text"
                id="vcPostal"
                required
                name="postal"
                placeholder=""
                defaultValue={billing != null ? billing.postal : ""}
              />

              <label htmlFor="vcPhone">Phone Number*</label>
              <input
                type="text"
                id="vcPhone"
                name="phone"
                required
                placeholder="555-555-5555"
                defaultValue={billing != null ? billing.phone : ""}
              />
            </div>
          </div>

          <input type="submit" className="vcCheckout-btn" value="Payment" />
        </form>
      </div>
    </React.Fragment>
  );
};

export default billing;
