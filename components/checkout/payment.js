import Cart from "./cart";

const payment = props => {
  return (
    <React.Fragment>
      <div className="vcBill-ship flex flex-row">
        <div className="vcShipping-details">
          <h2>Delivery Details</h2>

          <div>
            <span className="vcShipping-name">Name</span>
          </div>

          <div>
            <span className="vcShipping-coName">The Co.</span>
          </div>

          <div>
            <span className="vcShipping-eMail">person@theco.com</span>
          </div>

          <div>
            <span className="vcShipping-street">the street ave</span>
          </div>

          <div>
            <span className="vcShipping-city">City of Cities,</span>{" "}
            <span className="vcShipping-province">British Columbia</span>
          </div>

          <div>
            <span className="vcShipping-country">Canada,</span>{" "}
            <span className="vcShipping-code">V5T1J5</span>
          </div>

          <div>
            <span className="vcShipping-phone">1800.555.5555</span>
          </div>
        </div>

        <div className="vcBilling-details flex flex-col justify-center">
          <h2>Billing Details</h2>

          <div>
            <span className="vcShipping-name">First Name</span>{" "}
            <span className="vcShipping-lName">Last Name</span>
          </div>

          <div>
            <span className="vcShipping-coName">The Co.</span>
          </div>

          <div>
            <span className="vcShipping-eMail">person@theco.com</span>
          </div>

          <div>
            <span className="vcShipping-street">the street ave</span>
          </div>

          <div>
            <span className="vcShipping-city">City of Cities,</span>{" "}
            <span className="vcShipping-province">British Columbia</span>
          </div>

          <div>
            <span className="vcShipping-country">Canada,</span>{" "}
            <span className="vcShipping-code">V5T1J5</span>
          </div>

          <div>
            <span className="vcShipping-phone">1800.555.5555</span>
          </div>
        </div>
      </div>

      <div className="vcCheckout-content flex flex-col justify-around">
        <div className="vcSummary">
          <h2>Cart Summary</h2>

          <Cart page="payment" {...props} tax={50} shipping={50} total={true} />
        </div>
      </div>

      <div className="vcPayment-method">
        <h2>Payment Method</h2>

        <div className="vcPayment-choices flex flex-row justify-around items-center">
          <input type="radio" checked="checked" id="CashMoney" name="radio" />
          <label className="vcCashMoney flex flex-col" htmlFor="CashMoney">
            <span>Cash</span>
          </label>

          <input type="radio" id="Crypto" name="radio" />
          <label className="vcCrypto flex flex-col" htmlFor="Crypto">
            <span>Crypto Currency</span>
          </label>

          <input type="radio" id="MoneyTransfer" name="radio" />
          <label
            className="vcMoneyTransfer flex flex-col"
            htmlFor="MoneyTransfer"
          >
            <span>Money Transfer</span>
          </label>

          <input type="radio" id="CreditCard" name="radio" />
          <label className="vcCreditCard flex flex-col" htmlFor="CreditCard">
            <span>Credit Card</span>
          </label>
        </div>

        <div className="vcPayment-ccInput flex flex-col items-start">
          <label htmlFor="ccName">Name On Card</label>
          <input type="text" id="ccName" />

          <label htmlFor="ccName">Card Number</label>
          <input type="text" id="ccName" />

          <div className="vcCardinfo flex flex-row justify-between items-center">
            <span className="vcCardExpiry flex flex-col">
              <label htmlFor="ccExpiry">Expiry Date</label>
              <input type="text" id="ccDate" />
            </span>

            <span className="vcCardCCV flex flex-col">
              <label htmlFor="ccv">CCV</label>
              <input type="text" id="ccv" />
            </span>
          </div>
        </div>
      </div>

      <input
        onClick={() => {
          props.changeStep("Confirmation");
          window.scrollTo(0, 0);
        }}
        type="submit"
        className="vcCheckout-btn"
        value="Place Order"
      />
    </React.Fragment>
  );
};
export default payment;
