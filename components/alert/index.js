import Router from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";

const index = props => {
  return (
    <div className="bg-white shadow-md w-400 sm:w-280 h-300 rounded-lg shadow-lg text-blue ">
      <div
        onClick={() => props.toggleAlert(null)}
        className="absolute pin-t pin-r mr-2 mt-2"
      >
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
        <p className="font-bold text-2xl uppercase text-blue py-4 text-center px-2">
          {props.misc.alert.message}
        </p>
        <p className="w-full font-bold text-grey text-center px-4">
          {props.misc.alert.message2}
        </p>
        {/* </div> */}
        {Router.asPath != "/" + props.misc.alert.action ? (
          <button
            onClick={() => {
              if (props.misc.alert.action) actionFuncs(props.misc.alert.action);
              props.toggleAlert(null);
            }}
            className="p-3 px-4 mt-4 sm:mt-6"
          >
            {props.misc.alert.actionName
              ? props.misc.alert.actionName
              : "Close"}
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
