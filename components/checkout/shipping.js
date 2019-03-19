import data from "../../static/data";

const shipping = props => {
  let countries = data.countries.map((country, index) => {
    return (
      <option key={index} value={country}>
        {country}
      </option>
    );
  });
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
  provinceOrState;
  return (
    <React.Fragment>
      <div className="vcCheckout-content">
        <form className="vcWholesale-application flex flex-col justify-center">
          <label htmlFor="vcName">Name*</label>
          <input type="text" id="vcName" required placeholder="First Name" />

          <label htmlFor="vcCompany">Company Name*</label>
          <input
            type="text"
            id="vcCompany"
            required
            placeholder="Company Name"
          />

          <label htmlFor="vcEmail">Email Address*</label>
          <input
            type="text"
            id="vcEmail"
            required
            placeholder="you@companyname.com"
          />

          <label htmlFor="vcStreet">Street Address*</label>
          <input type="text" id="vcStreet" required placeholder="" />

          <label htmlFor="vcProvince">Province/State</label>
          <select required id="vcProvince" name="vcProvince">
            {provinceOrState}
          </select>

          <label htmlFor="vcCountry">Country*</label>
          <select className="vcCountry" required name="vcCountry">
            {countries}
          </select>

          <label htmlFor="vcStreet">Postal Code/Zip Code*</label>
          <input type="text" id="vcStreet" required placeholder="" />

          <label htmlFor="vcPhone">Phone Number*</label>
          <input type="text" id="vcPhone" required placeholder="555-555-5555" />

          <label htmlFor="vcMessage">Special Delivery Instructions</label>
          <textarea
            type="textarea"
            id="vcMessage"
            rows="10"
            placeholder="Special delivery instructions"
          />
        </form>
      </div>

      <input
        onClick={() => {
          props.changeStep("Billing");
          window.scrollTo(0, 0);
        }}
        type="submit"
        className="vcCheckout-btn"
        value="Billing"
      />
    </React.Fragment>
  );
};
export default shipping;
