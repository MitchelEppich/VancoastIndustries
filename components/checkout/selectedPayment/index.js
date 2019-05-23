import { CashCheque, EMT } from "./options";

const index = props => {
  let selectedOption;
  let {
    payment: { method: { value = null } = {} }
  } = props.checkout.orderDetails;

  switch (value) {
    case "CashCheque":
      selectedOption = <CashCheque {...props} />;
      break;
    case "E-Transfer":
      selectedOption = <EMT {...props} />;
      break;
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
