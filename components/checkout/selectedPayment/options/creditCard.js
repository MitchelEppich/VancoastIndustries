const index = props => {
  return (
    <div className="vcPayment-ccInput flex flex-col items-start">
      <label htmlFor="ccName">Name On Card</label>
      <input
        onChange={e =>
          props.modifyOrderDetails({
            ...props.checkout.orderDetails,
            payment: {
              ...props.checkout.orderDetails.payment,
              creditCard: {
                ...props.checkout.orderDetails.payment.creditCard,
                ccName: e.target.value
              }
            }
          })
        }
        type="text"
        id="ccName"
      />

      <label htmlFor="ccNumber">Card Number</label>
      <input
        onChange={e => {
          props.modifyOrderDetails({
            ...props.checkout.orderDetails,
            payment: {
              ...props.checkout.orderDetails.payment,
              creditCard: {
                ...props.checkout.orderDetails.payment.creditCard,
                ccNumber: e.target.value
              }
            }
          });
          e.target.setCustomValidity("");
        }}
        onInvalid={e => {
          e.target.setCustomValidity("Must be a valid Card Number");
        }}
        pattern={
          "^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$"
        }
        type="text"
        id="ccNumber"
        required
      />

      <div className="vcCardinfo flex flex-row sm:flex-col justify-between items-center">
        <span className="w-2/3 sm:w-full justify-between flex flex-wrap mx-2">
          <label className="w-full" htmlFor="ccExpiry">
            Expiry Date
          </label>
          <select
            className="w-3/5"
            onChange={e => {
              props.modifyOrderDetails({
                ...props.checkout.orderDetails,
                payment: {
                  ...props.checkout.orderDetails.payment,
                  creditCard: {
                    ...props.checkout.orderDetails.payment.creditCard,
                    ccExpiryMonth: e.target.value
                  }
                }
              });
            }}
            name="expireMM"
            id="expireMM"
          >
            <option value="">Month</option>
            <option value="01">January (01)</option>
            <option value="02">February (02)</option>
            <option value="03">March (03)</option>
            <option value="04">April (04)</option>
            <option value="05">May (05)</option>
            <option value="06">June (06)</option>
            <option value="07">July (07)</option>
            <option value="08">August (08)</option>
            <option value="09">September (09)</option>
            <option value="10">October (10)</option>
            <option value="11">November (11)</option>
            <option value="12">December (12)</option>
          </select>
          <select
            className="w-1/3 sm:mx-0 mx-2"
            onChange={e => {
              props.modifyOrderDetails({
                ...props.checkout.orderDetails,
                payment: {
                  ...props.checkout.orderDetails.payment,
                  creditCard: {
                    ...props.checkout.orderDetails.payment.creditCard,
                    ccExpiryYear: e.target.value
                  }
                }
              });
            }}
            name="expireYY"
            id="expireYY"
          >
            <option value="">Year</option>
            <option value="19">2019</option>
            <option value="21">2021</option>
            <option value="22">2022</option>
            <option value="23">2023</option>
            <option value="24">2024</option>
            <option value="25">2025</option>
          </select>
        </span>

        <span className="w-1/3 sm:w-full ml-4 sm:ml-0">
          <label htmlFor="ccv">CCV</label>
          <input
            onChange={e =>
              props.modifyOrderDetails({
                ...props.checkout.orderDetails,
                payment: {
                  ...props.checkout.orderDetails.payment,
                  creditCard: {
                    ...props.checkout.orderDetails.payment.creditCard,
                    ccCCV: e.target.value
                  }
                }
              })
            }
            type="number"
            max="9999"
            id="ccv"
          />
        </span>
      </div>
    </div>
  );
};
export default index;
