import data from "../../static/data";

const info = props => {
  let account = props.account.currentUser;
  if (account == null) return null;

  let countries = data.countries.map((country, index) => {
    return (
      <option key={index} value={country}>
        {country}
      </option>
    );
  });
  countries.unshift(<option key={countries.length}>Select Country...</option>);

  return (
    <div id="vcAccount-tab" className="tabcontent">
      <h1>Account Info</h1>
      <form
        className="vcAccount-details flex flex-col justify-center"
        onSubmit={e => {
          e.preventDefault();
          const form = e.target;
          const formData = new window.FormData(form);

          let name = formData.get("firstName");
          let surname = formData.get("lastName");
          let company = formData.get("company").toLowerCase();
          let email = formData.get("email").toLowerCase();
          let phone = formData.get("phone");
          let website = formData.get("website").toLowerCase();
          let license = formData.get("license");
          let address = formData.get("address").toLowerCase();
          let apartment = formData.get("apartment");
          if (apartment != null) apartment = apartment.toLowerCase();
          let city = formData.get("city").toLowerCase();
          let postal = formData.get("postal").toLowerCase();
          let country = formData.get("country");
          let state = formData.get("state").toLowerCase();
          let description = formData.get("description");

          let _address = {
            _id: account.address != null ? account.address._id : null,
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
            company,
            email,
            website,
            license,
            address: _address,
            description
          });
        }}
      >
        <div className="inline-flex w-full sm:flex-col flex">
          <label htmlFor="vcName" className="w-1/2 sm:w-full md:w-full mx-1">
            Your First Name*
            <input
              required
              type="text"
              disabled
              id=""
              name="firstName"
              className="w-full opacity-75"
              placeholder="First Name"
              defaultValue={
                account != null && account.address != null
                  ? account.address.name
                  : ""
              }
            />
          </label>

          <label htmlFor="vcName" className="w-1/2 sm:w-full md:w-full mx-1">
            Your Last Name*
            <input
              required
              type="text"
              id=""
              disabled
              name="lastName"
              className="w-full opacity-75"
              placeholder="Last Name"
              defaultValue={
                account != null && account.address != null
                  ? account.address.surname
                  : ""
              }
            />
          </label>
        </div>
        <div className="inline-flex w-full sm:flex-col flex">
          <label htmlFor="vcCompany" className="w-1/2 sm:w-full md:w-full mx-1">
            Company Name*
            <input
              required
              type="text"
              id="vcCompany"
              disabled
              name="company"
              className="w-full opacity-75"
              placeholder="Company Name"
              defaultValue={account != null ? account.company : ""}
            />
          </label>

          <label htmlFor="vcEmail" className="w-1/2 sm:w-full md:w-full mx-1">
            Company Email*
            <input
              required
              type="text"
              id="vcEmail"
              disabled
              name="email"
              className="w-full opacity-75"
              placeholder="you@companyname.com"
              defaultValue={account != null ? account.email : ""}
            />{" "}
          </label>
        </div>
        <div className="inline-flex w-full sm:flex-col flex">
          <label htmlFor="vcPhone" className="w-1/3 sm:w-full md:w-full mx-1">
            Company Phone*
            <input
              required
              type="text"
              id="vcPhone"
              disabled
              name="phone"
              className="w-full opacity-75"
              placeholder="555-555-5555"
              defaultValue={
                account != null && account.address != null
                  ? account.address.phone
                  : ""
              }
            />
          </label>

          <label htmlFor="vcWebsite" className="w-1/3 sm:w-full md:w-full mx-1">
            Company Website*
            <input
              required
              type="text"
              id="vcWebsite"
              name="website"
              disabled
              className="w-full opacity-75"
              placeholder="www.yoursite.com"
              defaultValue={account != null ? account.website : ""}
            />
          </label>

          <label htmlFor="vcLicense" className="w-1/3 sm:w-full md:w-full mx-1">
            Business License*
            <input
              required
              type="text"
              id="vcLicense"
              disabled
              name="license"
              className="w-full opacity-75"
              placeholder="#License"
              defaultValue={account != null ? account.license : ""}
            />
          </label>
        </div>
        <div className="inline-flex w-full sm:flex-col flex">
          <label htmlFor="vcAddress" className="w-1/2 sm:w-full md:w-full mx-1">
            Street Address*
            <input
              required
              type="text"
              id="vcAddress"
              disabled
              name="address"
              className="w-full opacity-75"
              placeholder="291 E. Hans Street"
              defaultValue={
                account != null && account.address != null
                  ? account.address.address
                  : ""
              }
            />
          </label>

          <label htmlFor="vcCity" className="w-1/2 sm:w-full md:w-full mx-1">
            City*
            <input
              required
              type="text"
              id="vcCity"
              name="city"
              disabled
              className="w-full opacity-75"
              placeholder="Smith Ville"
              defaultValue={
                account != null && account.address != null
                  ? account.address.city
                  : ""
              }
            />
          </label>
        </div>
        <div className="inline-flex w-full sm:flex-col flex">
          <label htmlFor="vcState" className="w-1/3 sm:w-full md:w-full mx-1">
            Province/State*
            <input
              required
              type="text"
              id="vcState"
              name="state"
              disabled
              className="w-full opacity-75"
              placeholder="British Columbia"
              defaultValue={
                account != null && account.address != null
                  ? account.address.state
                  : ""
              }
            />
          </label>

          <label htmlFor="vcCountry" className="w-1/3 sm:w-full md:w-full mx-1">
            Country*
            <select
              className="vcCountry"
              name="country"
              id="vcCountry"
              disabled
              className="w-full opacity-75"
              defaultValue={
                account != null &&
                account.address &&
                account.address.country != null
                  ? account.address.country.toUpperCase()
                  : ""
              }
            >
              {countries}
            </select>
          </label>

          <label htmlFor="vcPostal" className="w-1/3 sm:w-full md:w-full mx-1">
            Postal Code/Zip Code*
            <input
              type="text"
              id="vcPostal"
              name="postal"
              disabled
              className="w-full opacity-75"
              placeholder="V5T 1J9"
              defaultValue={
                account != null && account.address != null
                  ? account.address.postal
                  : ""
              }
            />
          </label>
        </div>

        <label htmlFor="vcMessage" className="w-full ml-1 pr-2">
          Company Profile*
          <textarea
            type="textarea"
            id="vcMessage"
            name="description"
            disabled
            className="w-full opacity-75"
            rows="10"
            placeholder="Some stuff here about the company and what makes the co."
            defaultValue={account != null ? account.description : ""}
          />
        </label>

        {/* <input type="submit" value="Save" /> */}
      </form>
    </div>
  );
};

export default info;
