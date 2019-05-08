import { CreditCard, Crypto, Cash, EMT } from "./options";

const index = props => {
  let selectedOption = props.checkout.orderDetails.payment.selectedOption;

  switch (selectedOption) {
    case "creditCard":
      selectedOption = <CreditCard {...props} />;
      break;
    case "crypto":
      selectedOption = <Crypto {...props} />;
      break;
    case "cash":
      selectedOption = <Cash {...props} />;
      break;
    case "emt":
      selectedOption = <EMT {...props} />;
      break;
    // case "moneyGram":
    //   selectedOption = <MoneyGram {...props} />;
    //   break;
    default:
      selectedOption = (
        <div className="w-full flex justify-center text-2xl font-bold mt-5 mb-12">
          <p>Please select a payment option...</p>
        </div>
      );
      break;
  }

  return selectedOption;
};

export default index;
