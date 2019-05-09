import data from "../../static/data";

const shipping = props => {
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
        onSubmit={e => {
          e.preventDefault();
          props.changeStep("Billing");
          window.scrollTo(0, 0);
        }}
      >
        <div className="vcCheckout-content">
          <div className="vcWholesale-application flex flex-col justify-center">
            <label htmlFor="vcName">Name*</label>
            <input
              onChange={e =>
                props.modifyOrderDetails({
                  ...props.checkout.orderDetails,
                  shipping: {
                    ...props.checkout.orderDetails.shipping,
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
              onChange={e =>
                props.modifyOrderDetails({
                  ...props.checkout.orderDetails,
                  shipping: {
                    ...props.checkout.orderDetails.shipping,
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
              onChange={e =>
                props.modifyOrderDetails({
                  ...props.checkout.orderDetails,
                  shipping: {
                    ...props.checkout.orderDetails.shipping,
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
              onChange={e =>
                props.modifyOrderDetails({
                  ...props.checkout.orderDetails,
                  shipping: {
                    ...props.checkout.orderDetails.shipping,
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
              onChange={e =>
                props.modifyOrderDetails({
                  ...props.checkout.orderDetails,
                  shipping: {
                    ...props.checkout.orderDetails.shipping,
                    streetAddress: e.target.value
                  }
                })
              }
              type="text"
              id="vcStreet"
              required
              placeholder=""
            />
            <label htmlFor="vcCity">City*</label>
            <input
              onChange={e =>
                props.modifyOrderDetails({
                  ...props.checkout.orderDetails,
                  shipping: {
                    ...props.checkout.orderDetails.shipping,
                    city: e.target.value
                  }
                })
              }
              type="text"
              id="vcCity"
              required
              placeholder=""
            />

            <label htmlFor="vcProvince">Province/State</label>
            <select
              onChange={e =>
                props.modifyOrderDetails({
                  ...props.checkout.orderDetails,
                  shipping: {
                    ...props.checkout.orderDetails.shipping,
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
              onChange={e =>
                props.modifyOrderDetails({
                  ...props.checkout.orderDetails,
                  shipping: {
                    ...props.checkout.orderDetails.shipping,
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
              onChange={e =>
                props.modifyOrderDetails({
                  ...props.checkout.orderDetails,
                  shipping: {
                    ...props.checkout.orderDetails.shipping,
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
              onChange={e =>
                props.modifyOrderDetails({
                  ...props.checkout.orderDetails,
                  shipping: {
                    ...props.checkout.orderDetails.shipping,
                    phone: e.target.value
                  }
                })
              }
              type="text"
              id="vcPhone"
              required
              placeholder="555-555-5555"
            />

            <label htmlFor="vcMessage">Special Delivery Instructions</label>
            <textarea
              onChange={e =>
                props.modifyOrderDetails({
                  ...props.checkout.orderDetails,
                  shipping: {
                    ...props.checkout.orderDetails.shipping,
                    deliveryInstructions: e.target.value
                  }
                })
              }
              type="textarea"
              id="vcMessage"
              rows="10"
              placeholder="Special delivery instructions"
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
