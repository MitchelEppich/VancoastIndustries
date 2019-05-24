import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const thumbnail = props => {
  let account = props.account.currentUser;
  let address = props.address;
  let type = props.type;
  let key;
  switch (type) {
    case "billing":
      key = "defaultBilling";
      break;
    case "shipping":
      key = "defaultShipping";
      break;
  }
  let index = props.index;
  let isDefault = account[key] == index;

  let fullName = address.name + " " + address.surname;

  return (
    <div className="border-2 border-grey-lighter rounded w-300 text-sm h-200 m-4 relative">
      <h4
        className={`font-bold uppercase p-2 ${
          isDefault ? "bg-blue text-white" : "bg-grey-lighter text-grey"
        }  text-left text-lg`}
      >
        {fullName.length > 16 ? fullName.substring(0, 16) + "..." : fullName}
        {isDefault ? (
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-white absolute pin-r mr-2"
          />
        ) : null}
      </h4>

      <div className="capitalize">
        <div className="p-2">
          <div className="ml-2 mt-1">{address.address}</div>
          <div className="ml-2 mt-1">{address.apartment}</div>
          <div className="ml-2 mt-1">
            {address.city}, {address.state}{" "}
          </div>
          <div className="ml-2 mt-1">
            {address.country}{" "}
            <span className="uppercase"> - {address.postal}</span>
          </div>
          <div className="ml-2 mt-1">Phone: {address.phone}</div>
        </div>
        <div className="pin-b absolute pb-2 flex font-bold w-full border-t-2 border-grey-lighter pt-2 bg-grey-lighter">
          <div
            className="cursor-pointer hover:text-blue w-1/3 text-center"
            onClick={() => {
              props.setAddressToEdit(address);
            }}
          >
            Edit
          </div>
          |
          <div
            className="cursor-pointer hover:text-blue w-1/3 text-center"
            onClick={() => {
              props.deleteAddress({ _id: address._id, account: account._id });
            }}
          >
            Delete
          </div>
          |
          {!isDefault ? (
            <div
              className="cursor-pointer hover:text-blue w-1/3 text-center"
              onClick={() => {
                props.updateAccount({
                  _id: account._id,
                  [key]: index
                });
              }}
            >
              Set Default
            </div>
          ) : (
            <div className="cursor-pointer hover:text-blue w-1/3 text-center">
              Selected <FontAwesomeIcon icon={faCheck} className="ml-1" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default thumbnail;
