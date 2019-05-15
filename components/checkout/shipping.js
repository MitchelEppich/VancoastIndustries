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
          props.changeStep("Billing");
          window.scrollTo(0, 0);
          const form = e.target;
          const formData = new window.FormData(form);
          var object = {};
          formData.forEach((value, key) => {
            object[key] = value;
          });
          console.log(object);
          let $form = document.getElementById("shippingForm");
          let $inputs = $form.getElementsByTagName("input");

          // console.log($inputs);
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
              name="name"
              required
              placeholder="First Name"
              defaultValue={shipping != null ? shipping.name : ""}
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
              name="surname"
              required
              placeholder="Last Name"
              defaultValue={shipping != null ? shipping.surname : ""}
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
              name="company"
              required
              placeholder="Company Name"
              defaultValue={account != null ? account.company : ""}
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
              name="email"
              placeholder="you@companyname.com"
              defaultValue={account != null ? account.email : ""}
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
              name="address"
              required
              placeholder=""
              defaultValue={shipping != null ? shipping.address : ""}
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
              name="city"
              required
              placeholder=""
              defaultValue={shipping != null ? shipping.city : ""}
            />

            <label htmlFor="vcProvince">Province/State</label>
            <input
              type="text"
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
              name="state"
              defaultValue={shipping != null ? shipping.state : ""}
            />

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
              name="country"
              defaultValue={shipping != null ? shipping.country : ""}
            >
              {countries}
            </select>

            <label htmlFor="vcPostal">Postal Code/Zip Code*</label>
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
              id="vcPostal"
              required
              name="postal"
              placeholder=""
              defaultValue={shipping != null ? shipping.postal : ""}
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
              name="phone"
              required
              placeholder="555-555-5555"
              defaultValue={shipping != null ? shipping.phone : ""}
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
              name="message"
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
