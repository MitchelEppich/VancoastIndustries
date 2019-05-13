import QuickDetails from "./quickDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { SeedSelect, Header } from "..";
const QuickView = props => {
  return (
    <div className="absolute w-600 h-800 bg-white shadow-md z-50 pin-x mx-auto">
      <div className="flex w-full p-2 pin-t pin-r justify-end pr-3">
        <FontAwesomeIcon
          icon={faTimes}
          className="fa-2x cursor-pointer hover:text-blue"
        />
      </div>
      <div className="w-full">
        <div className="text-center mx-auto w-200">
          {/* {console.log(props)} */}
          <img
            src="../static/img/products/cks/cks-white-widow-auto.png"
            className="w-full"
          />
        </div>
      </div>
      {/* <QuickDetails {...props} /> */}
      <Header {...props} />
      <SeedSelect {...props} />
    </div>
  );
};

export default QuickView;
