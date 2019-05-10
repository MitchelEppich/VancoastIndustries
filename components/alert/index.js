import Router from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";

const index = props => {
  return (
    <div
      style={{ transform: "translateX(calc(50vw - 150px))" }}
      className="bg-white shadow-md w-400 sm:w-280 h-300 mt-64 sm:mt-32 mx-auto fixed z-50 rounded-lg shadow-lg text-blue "
    >
      <div className="absolute pin-t pin-r mr-2 mt-2">
        <FontAwesomeIcon
          icon={faTimes}
          className="fa-2x hover:text-blue text-grey opacity-75 cursor-pointer"
        />
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        {/* <div className="flex text-center h-full items-center flex-col "> */}
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          className="fa-5x text-grey-light"
        />
        <p className="font-bold text-2xl uppercase text-blue py-4 text-center">
          Please login to continue
        </p>
        <p className="w-full font-bold text-grey text-center">
          {props.misc.alert.message}
        </p>
        {/* </div> */}
        {Router.asPath != "/" + props.misc.alert.action ? (
          <button
            onClick={() => actionFuncs(props.misc.alert.action)}
            className="p-3 px-4 mt-12 sm:mt-6"
          >
            {props.misc.alert.actionName}
          </button>
        ) : null}
      </div>
    </div>
  );
};
let actionFuncs = action => {
  switch (action) {
    case "login":
      Router.push("/login");
      break;
    case "shop":
      Router.push("/shop");
      break;
    default:
      break;
  }
};

export default index;
