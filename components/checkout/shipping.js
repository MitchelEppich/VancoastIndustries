import data from "../../static/data";

const shipping = props => {
  let account = props.account.currentUser;
  let shipping = account == null ? null : account.shipping[0];
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
            apartment: "ShipAppartment"
          };
          props.changeStep("Billing");
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
            shipping: object
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
              defaultValue={shipping != null ? shipping.name : ""}
            />
            <input
              type="text"
              id="vcName"
              name="surname"
              required
              placeholder="Last Name"
              defaultValue={shipping != null ? shipping.surname : ""}
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
              defaultValue={shipping != null ? shipping.address : ""}
            />

            <label htmlFor="vcApartment">Apartment*</label>
            <input
              type="text"
              id="vcApartment"
              name="apartment"
              required
              placeholder=""
              defaultValue={shipping != null ? shipping.apartment : ""}
            />

            <label htmlFor="vcCity">City*</label>
            <input
              type="text"
              id="vcCity"
              name="city"
              required
              placeholder=""
              defaultValue={shipping != null ? shipping.city : ""}
            />

            <label htmlFor="vcProvince">Province/State</label>
            <input
              type="text"
              required
              id="vcProvince"
              name="state"
              defaultValue={shipping != null ? shipping.state : ""}
            />

            <label htmlFor="vcCountry">Country*</label>
            <select
              className="vcCountry"
              required
              name="country"
              defaultValue={shipping != null ? shipping.country : ""}
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
              defaultValue={shipping != null ? shipping.postal : ""}
            />

            <label htmlFor="vcPhone">Phone Number*</label>
            <input
              type="text"
              id="vcPhone"
              name="phone"
              required
              placeholder="555-555-5555"
              defaultValue={shipping != null ? shipping.phone : ""}
            />
          </div>
        </div>

        <input
          type="submit"
          className="vcCheckout-btn mx-auto"
          value="Billing"
        />
      </form>
    </React.Fragment>
  );
};
export default shipping;
