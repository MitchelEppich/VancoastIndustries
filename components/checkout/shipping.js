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
          var object = {};
          formData.forEach((value, key) => {
            object[key] = { value, tag: tags[key] };
          });
          // console.log(object);
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
                  placeholder="First Name"
                  className="w-full"
                  defaultValue={shipping != null ? shipping.name : ""}
                />
              </label>
              <label htmlFor="vcName" className="w-1/2 mx-1">
                Last Name*
                <input
                  type="text"
                  id="vcName"
                  name="surname"
                  required
                  placeholder="Last Name"
                  className="w-full"
                  defaultValue={shipping != null ? shipping.surname : ""}
                />
              </label>
            </div>
            <div className="inline-flex w-full">
              <label htmlFor="vcEmail" className="w-1/2 mx-1">
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
              <label htmlFor="vcPhone" className="w-1/2 mx-1">
                Phone Number*
                <input
                  type="text"
                  id="vcPhone"
                  name="phone"
                  required
                  className="w-full"
                  placeholder="555-555-5555"
                  defaultValue={shipping != null ? shipping.phone : ""}
                />
              </label>
            </div>
            <div className="inline-flex w-full">
              <label htmlFor="vcStreet" className="w-2/3 mx-1">
                Street Address*
                <input
                  type="text"
                  id="vcStreet"
                  name="address"
                  required
                  className="w-full"
                  placeholder=""
                  defaultValue={shipping != null ? shipping.address : ""}
                />
              </label>

              <label htmlFor="vcApartment" className="w-1/3 mx-1">
                Apartment
                <input
                  type="text"
                  id="vcApartment"
                  name="apartment"
                  // required
                  className="w-full"
                  placeholder=""
                  defaultValue={shipping != null ? shipping.apartment : ""}
                />
              </label>
            </div>
            <div className="inline-flex w-full">
              <label htmlFor="vcCity" className="w-1/2 mx-1">
                City*
                <input
                  type="text"
                  id="vcCity"
                  className="w-full"
                  name="city"
                  required
                  placeholder=""
                  defaultValue={shipping != null ? shipping.city : ""}
                />
              </label>

              <label htmlFor="vcProvince" className="w-1/2 mx-1">
                Province/State*
                <input
                  type="text"
                  required
                  className="w-full"
                  id="vcProvince"
                  name="state"
                  defaultValue={shipping != null ? shipping.state : ""}
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
                  defaultValue={shipping != null ? shipping.country : ""}
                >
                  {countries}
                </select>
              </label>

              <label htmlFor="vcPostal" className="w-1/2 mx-1">
                Postal Code/Zip Code*
                <input
                  type="text"
                  id="vcPostal"
                  className="w-full"
                  required
                  name="postal"
                  placeholder=""
                  defaultValue={shipping != null ? shipping.postal : ""}
                />
              </label>
            </div>
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
