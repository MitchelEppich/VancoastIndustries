import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faEnvelope,
  faPhone,
  faGlobe,
  faBook,
  faUserSlash,
  faTimes,
  faCheck,
  faUser,
  faIdCard,
  faMousePointer,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";

const index = props => {
  let currentAccount = props.admin.currentAccount;
  if (!currentAccount)
    return (
      <div className="text-center h-full flex items-center justify-center font-bold text-2xl text-grey-light uppercase flex-col">
        <img
          src="../static/img/assets/vancoast-watermark.png"
          className="w-100"
        />
        <span>Please, select an user to manage.</span>
      </div>
    );
  let status = props.admin.statuses[currentAccount.approved];
  let actions = [
    { label: "ban", color: "red", pos: 3, icon: faUserSlash },
    { label: "decline", color: "black", pos: 2, icon: faTimes },
    { label: "approve", color: "green", pos: 1, icon: faCheck }
  ]
    .filter(action => {
      switch (currentAccount.approved) {
        case 0:
          return true;
        case 1:
          return action.label == "ban" || action.label == "decline";
        case 2:
          return action.label == "approve" || action.label == "ban";
        case 3:
          return action.label == "approve";
      }
    })
    .map((action, index) => {
      return (
        <span
          key={index}
          onClick={() => {
            props.changeAccountStatus({
              account: currentAccount,
              accounts: props.admin.accounts,
              status: action.pos,
              note: props.admin.statusNote,
              icon: action.icon,
              createAccount: action.pos == 1 && currentAccount.approved == 0
            });
          }}
          className={`rounded text-white text-base font-bold w-32 mx-2 text-center py-2 uppercase hover:bg-grey-light hover:text-grey cursor-pointer bg-${
            action.color
          }`}
        >
          {action.label} <FontAwesomeIcon icon={action.icon} className="ml-1" />
        </span>
      );
    });
  return (
    <div className="w-full">
      <div className="uppercase text-xl bg-grey-dark text-blue-purple font-bold w-full text-right pr-4 border-b border-grey-dark pb-4 pt-3 opacity-75 relative">
        <p className="mr-16 pt-1 text-grey-lighter ">Profile Manager </p>
        <img
          src="../static/img/assets/vancoast-watermark.png"
          className="w-16 absolute pin-t pin-r pr-4 mr-2 pt-2"
        />
      </div>
      <div className="w-full relative py-4 mt-5">
        <p className="text-center uppercase text-sm text-grey-dark font-bold">
          Company / Name
        </p>
        <p className=" w-full text-center uppercase font-bold text-xl text-grey-darker">
          {currentAccount.company}
        </p>
        <div className="w-150 pin-r pin-t absolute uppercase mt-2 pt-1 mr-4 font-bold text-xl">
          <p className="text-center uppercase text-sm text-grey-dark font-bold -ml-8">
            Status
          </p>
          <p className={`text-${status.color}`}>
            {status.label} <FontAwesomeIcon icon={status.icon} className="" />
          </p>
        </div>
      </div>

      <div className="inline-flex w-full mt-8">
        <div className="w-1/2 p-6">
          <div className="px-2">
            <h2 className="uppercase text-grey-dark opacity-75 mb-4 w-full border-b-2 border-grey-dark text-center text-xl pb-1">
              Contact Information
            </h2>

            <p className="w-full max-w-400 text-base my-3 flex justify-between">
              <span className=" text-sm mr-2 uppercase font-bold text-grey-dark">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 text-grey-light"
                />
                Email:
              </span>
              <span className="lowercase">
                {currentAccount.email ? currentAccount.email : "N/A"}
              </span>
            </p>
            <p className="w-full max-w-400 text-base my-3 flex justify-between">
              <span className=" text-sm uppercase mr-2 font-bold text-grey-dark">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-2 text-grey-light"
                />
                Phone:
              </span>
              <span>{currentAccount.phone ? currentAccount.phone : "N/A"}</span>
            </p>
            <p className="w-full max-w-400 text-base my-3 flex justify-between">
              <span className=" text-sm uppercase mr-2 font-bold text-grey-dark">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="mr-2 text-grey-light"
                />
                Website:
              </span>
              <span>
                {currentAccount.website ? currentAccount.website : "N/A"}
              </span>
            </p>
            <p className="w-full max-w-400 text-base my-3 flex justify-between">
              <span className=" text-sm uppercase mr-2 font-bold text-grey-dark">
                <FontAwesomeIcon
                  icon={faBook}
                  className="mr-2 text-grey-light"
                />{" "}
                License:
              </span>
              <span>
                {currentAccount.license ? currentAccount.license : "N/A"}
              </span>
            </p>
            <p className="w-full max-w-400 text-base my-3 flex justify-between">
              <span className=" text-sm uppercase mr-2 font-bold text-grey-dark">
                <FontAwesomeIcon
                  icon={faBook}
                  className="mr-2 text-grey-light"
                />{" "}
                Date Created:
              </span>

              <span className="text-grey">
                {moment(Date.now()).format("ll")}
              </span>
            </p>
            {/* <p className="w-full max-w-400 text-base my-3 flex justify-between">
              <span className=" text-sm uppercase mr-2 font-bold text-grey-dark">
                <FontAwesomeIcon
                  icon={faUserAlt}
                  className="mr-2 text-grey-light"
                />{" "}
                Status:
              </span>
              <span className={`uppercase text-${status.color}`}>
                {status.label}
              </span>
            </p> */}
            <div className="w-full text-base h-250 mt-12 pt-3">
              {/* <p className="upp text-sm ercase w-full mr-2 my-1 font-bold text-grey-dark uppercase">
                <FontAwesomeIcon
                  icon={faStickyNote}
                  className="mr-2 text-grey-light"
                />{" "}
                Description:
              </p> */}
              <h2 className="uppercase text-grey-dark text-xl opacity-75 mb-4 w-full border-b-2 border-grey-dark text-center pb-1">
                Company Description
              </h2>
              <p className="w-full">{currentAccount.description}</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 mt-6 border-l-2 border-grey-lighter px-4">
          <div className="w-full text-base">
            <h2 className="uppercase text-grey-dark text-xl opacity-75 mb-1 w-full border-b-2 border-grey-dark text-center pb-1">
              Latest Orders
            </h2>
            <div className="inline-flex w-full my-1 bg-grey-darker font-bold uppercase text-white p-1 text-sm">
              <div className="w-1/3">
                <p className="w-full pl-3">Order#</p>
              </div>
              <div className="w-1/3">
                <p className="w-full">Total</p>
              </div>
              <div className="w-1/3">
                <p className="w-full">Date</p>
              </div>
            </div>
            <div className="h-150 w-full overflow-y-auto">
              <div className="inline-flex w-full my-1 bg-grey-lighter p-1 text-sm">
                <p className="w-1/3">
                  <span className="w-full pl-3">2135-467</span>
                </p>
                <p className="w-1/3">
                  <span className="w-full">$12560.00</span>
                </p>
                <p className="w-1/3">
                  <span className="w-full">May 23, 2019</span>
                </p>
              </div>
              <div className="inline-flex w-full my-1 bg-white p-1 text-sm">
                <p className="w-1/3">
                  <span className="w-full pl-3">2135-467</span>
                </p>
                <p className="w-1/3">
                  <span className="w-full">$1260.00</span>
                </p>
                <p className="w-1/3">
                  <span className="w-full">May 23, 2019</span>
                </p>
              </div>
              <div className="inline-flex w-full my-1 bg-grey-lighter p-1 text-sm">
                <p className="w-1/3">
                  <span className="w-full pl-3">2135-467</span>
                </p>
                <p className="w-1/3">
                  <span className="w-full">$607.00</span>
                </p>
                <p className="w-1/3">
                  <span className="w-full">May 23, 2019</span>
                </p>
              </div>
              <div className="inline-flex w-full my-1 bg-white p-1 text-sm">
                <p className="w-1/3">
                  <span className="w-full pl-3">2135-467</span>
                </p>
                <p className="w-1/3">
                  <span className="w-full">$580.00</span>
                </p>
                <p className="w-1/3">
                  <span className="w-full">May 23, 2019</span>
                </p>
              </div>
              <div className="inline-flex w-full my-1 bg-grey-lighter p-1 text-sm">
                <p className="w-1/3">
                  <span className="w-full pl-3">2135-467</span>
                </p>
                <p className="w-1/3">
                  <span className="w-full">$607.00</span>
                </p>
                <p className="w-1/3">
                  <span className="w-full">May 23, 2019</span>
                </p>
              </div>{" "}
              <div className="inline-flex w-full my-1 bg-white p-1 text-sm">
                <p className="w-1/3">
                  <span className="w-full pl-3">2135-467</span>
                </p>
                <p className="w-1/3">
                  <span className="w-full">$580.00</span>
                </p>
                <p className="w-1/3">
                  <span className="w-full">May 23, 2019</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full text-lg my-3 flex flex-wrap justify-between mt-8 ">
            <h2 className="uppercase text-grey-dark text-xl opacity-75 mb-4 w-full border-b-2 border-grey-dark text-center pb-1">
              Actions
            </h2>
            <textarea
              style={{ resize: "none" }}
              onChange={e => {
                props.handleStatusChangeNote(e.target.value);
              }}
              className="w-full text-base border rounded m-1 p-2 h-32 mx-2"
              placeholder="Additional Note/Reason (not required):"
              type="text"
            />
            <div className="px-8 py-3 w-full inline-flex flex justify-center">
              {actions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;
