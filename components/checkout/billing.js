import data from "../../static/data";

const billing = props => {
  let sameAsShipping = props.checkout.orderDetails.sameAsShipping;
  let shipping = props.checkout.orderDetails.shipping || {};
  let billing = props.checkout.orderDetails.billing || {};
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
        <form className="vcWholesale-application flex flex-col justify-center">
          <div className="">
            <label htmlFor="vcSameAsShipping">Billing same as Shipping?</label>
            <input
              value={true}
              onChange={e => {
                props.modifyOrderDetails({
                  ...props.checkout.orderDetails,
                  billing: {
                    ...props.checkout.orderDetails.shipping
                  },
                  sameAsShipping: !props.checkout.orderDetails.sameAsShipping
                });
              }}
              className="ml-4"
              type="checkbox"
              id="vcSameAsShipping"
            />
          </div>
          <label htmlFor="vcName">Name*</label>
          <input
            value={sameAsShipping ? shipping.firstName : billing.firstName}
            onChange={e =>
              props.modifyOrderDetails({
                ...props.checkout.orderDetails,
                billing: {
                  ...props.checkout.orderDetails.billing,
                  firstName: e.target.value
                }
              })
            }
            type="text"
            id="vcName"
            required
            placeholder="First Name"
          />
          <input
            value={sameAsShipping ? shipping.lastName : billing.lastName}
            onChange={e =>
              props.modifyOrderDetails({
                ...props.checkout.orderDetails,
                billing: {
                  ...props.checkout.orderDetails.billing,
                  lastName: e.target.value
                }
              })
            }
            type="text"
            id="vcName"
            required
            placeholder="Last Name"
          />

          <label htmlFor="vcCompany">Company Name*</label>
          <input
            value={sameAsShipping ? shipping.company : billing.company}
            onChange={e =>
              props.modifyOrderDetails({
                ...props.checkout.orderDetails,
                billing: {
                  ...props.checkout.orderDetails.billing,
                  company: e.target.value
                }
              })
            }
            type="text"
            id="vcCompany"
            required
            placeholder="Company Name"
          />

          <label htmlFor="vcEmail">Email Address*</label>
          <input
            value={sameAsShipping ? shipping.email : billing.email}
            onChange={e =>
              props.modifyOrderDetails({
                ...props.checkout.orderDetails,
                billing: {
                  ...props.checkout.orderDetails.billing,
                  email: e.target.value
                }
              })
            }
            type="text"
            id="vcEmail"
            required
            placeholder="you@companyname.com"
          />

          <label htmlFor="vcStreet">Street Address*</label>
          <input
            value={
              sameAsShipping ? shipping.streetAddress : billing.streetAddress
            }
            onChange={e =>
              props.modifyOrderDetails({
                ...props.checkout.orderDetails,
                billing: {
                  ...props.checkout.orderDetails.billing,
                  streetAddress: e.target.value
                }
              })
            }
            type="text"
            id="vcStreet"
            required
            placeholder=""
          />

          <label htmlFor="vcProvince">Province/State</label>
          <select
            value={
              sameAsShipping ? shipping.provinceState : billing.provinceState
            }
            onChange={e =>
              props.modifyOrderDetails({
                ...props.checkout.orderDetails,
                billing: {
                  ...props.checkout.orderDetails.billing,
                  provinceState: e.target.value
                }
              })
            }
            required
            id="vcProvince"
            name="vcProvince"
          >
            {provinceOrState}
          </select>

          <label htmlFor="vcCountry">Country*</label>
          <select
            value={sameAsShipping ? shipping.country : billing.country}
            onChange={e =>
              props.modifyOrderDetails({
                ...props.checkout.orderDetails,
                billing: {
                  ...props.checkout.orderDetails.billing,
                  country: e.target.value
                }
              })
            }
            className="vcCountry"
            required
            name="vcCountry"
          >
            {countries}
          </select>

          <label htmlFor="vcStreet">Postal Code/Zip Code*</label>
          <input
            value={sameAsShipping ? shipping.postalZip : billing.postalZip}
            onChange={e =>
              props.modifyOrderDetails({
                ...props.checkout.orderDetails,
                billing: {
                  ...props.checkout.orderDetails.billing,
                  postalZip: e.target.value
                }
              })
            }
            type="text"
            id="vcStreet"
            required
            placeholder=""
          />

          <label htmlFor="vcPhone">Phone Number*</label>
          <input
            value={sameAsShipping ? shipping.phone : billing.phone}
            onChange={e =>
              props.modifyOrderDetails({
                ...props.checkout.orderDetails,
                billing: {
                  ...props.checkout.orderDetails.billing,
                  phone: e.target.value
                }
              })
            }
            type="text"
            id="vcPhone"
            required
            placeholder="555-555-5555"
          />

          {/* <label htmlFor="vcMessage">Special Delivery Instructions</label>
          <textarea
            type="textarea"
            id="vcMessage"
            rows="10"
            placeholder="Special delivery instructions"
          /> */}
        </form>
      </div>

      <input
        onClick={() => {
          props.changeStep("Payment");
          window.scrollTo(0, 0);
        }}
        type="button"
        className="vcCheckout-btn"
        value="Payment"
      />
    </React.Fragment>
  );
};

export default billing;
