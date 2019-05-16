import data from "../../static/data";

const shipping = props => {
  let account = props.account.currentUser;
  let shipping = account == null ? null : account.shipping[0];

  let countries = data.countries.map((country, index) => {
    return (
      <option key={index} value={country}>
        {country}
      </option>
    );
  });
  countries.unshift(<option key={countries.length}>Select Country...</option>);

  return (
    <div id="" className="tabcontent">
      <h1>Shipping Info</h1>
      <form
        className="vcAccount-details flex flex-col justify-center"
        onSubmit={e => {
          e.preventDefault();
          const form = e.target;
          const formData = new window.FormData(form);

          let name = formData.get("firstName");
          let surname = formData.get("lastName");
          let phone = formData.get("phone");
          let address = formData.get("address").toLowerCase();
          let apartment = formData.get("apartment");
          if (apartment != null) apartment = apartment.toLowerCase();
          let city = formData.get("city").toLowerCase();
          let postal = formData.get("postal").toLowerCase();
          let country = formData.get("country");
          let state = formData.get("state").toLowerCase();

          let _address = {
            _id: shipping == null ? null : shipping._id,
            name,
            surname,
            phone,
            postal,
            country,
            state,
            address,
            apartment,
            city
          };

          props.updateAccount({
            _id: account._id,
            shipping: [_address]
          });
        }}
      >
        <div className="w-full inline-flex sm:flex-col flex">
          <label htmlFor="vcName" className="w-1/2 sm:w-full mx-1">
            Your First Name*
            <input
              required
              type="text"
              id=""
              name="firstName"
              className="w-full"
              placeholder="First Name"
              defaultValue={shipping != null ? shipping.name : ""}
            />
          </label>

          <label htmlFor="vcName" className="w-1/2 sm:w-full mx-1">
            Your Last Name*
            <input
              required
              type="text"
              id=""
              name="lastName"
              className="w-full"
              placeholder="Last Name"
              defaultValue={shipping != null ? shipping.surname : ""}
            />
          </label>
        </div>
        <div className="w-full inline-flex sm:flex-col flex">
          <label htmlFor="vcAddress" className="w-1/2 sm:w-full mx-1">
            Street Address*
            <input
              required
              type="text"
              id=""
              name="address"
              className="w-full"
              placeholder="291 E. Hans Street"
              defaultValue={shipping != null ? shipping.address : ""}
            />
          </label>
          <label htmlFor="vcApartment" className="w-1/2 sm:w-full mx-1">
            Apartment*
            <input
              required
              type="text"
              id=""
              name="apartment"
              className="w-full"
              placeholder="Suite 8392"
              defaultValue={shipping != null ? shipping.apartment : ""}
            />
          </label>
        </div>
        <div className="w-full inline-flex sm:flex-col flex">
          <label htmlFor="vcCity" className="w-1/3 sm:w-full mx-1">
            City*
            <input
              required
              type="text"
              id=""
              name="city"
              className="w-full"
              placeholder="Smith Ville"
              defaultValue={shipping != null ? shipping.city : ""}
            />
          </label>

          <label htmlFor="vcState" className="w-1/3 sm:w-full mx-1">
            Province/State*
            <input
              required
              type="text"
              id=""
              name="state"
              className="w-full"
              placeholder="British Columbia"
              defaultValue={shipping != null ? shipping.state : ""}
            />
          </label>

          <label htmlFor="vcCountry" className="w-1/3 sm:w-full mx-1">
            Country*
            <select
              className="vcCountry"
              name="country"
              id=""
              className="w-full"
              defaultValue={shipping != null ? shipping.country : ""}
            >
              {countries}
            </select>
          </label>
        </div>
        <div className="w-full inline-flex sm:flex-col flex">
          <label htmlFor="vcPostal" className="w-1/2 sm:w-full mx-1">
            Postal Code/Zip Code*
            <input
              type="text"
              id=""
              name="postal"
              className="w-full"
              placeholder="V5T 1J9"
              defaultValue={shipping != null ? shipping.postal : ""}
            />
          </label>
          <label htmlFor="vcPhone" className="w-1/2 sm:w-full mx-1">
            Company Phone*
            <input
              required
              type="text"
              id=""
              name="phone"
              className="w-full"
              placeholder="555-555-5555"
              defaultValue={shipping != null ? shipping.phone : ""}
            />
          </label>
        </div>
        <label>
          <input type="checkbox" className="checkbox" />
          <span className="text-base">Use the Same for Billing Address?</span>
        </label>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default shipping;
