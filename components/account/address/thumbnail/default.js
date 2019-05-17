import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const defaultThumbnail = props => {
  return (
    <div
      onClick={() => {
        // props.updateAccount({ _id: account._id, shipping: [address] })
        props.setAddressToEdit({});
      }}
      className="cursor-pointer border-2 border-grey-light border-dashed rounded p-3 w-300 text-sm h-200 m-4 flex items-center content-center justify-center flex-wrap text-grey-lightest"
    >
      <div className="hover:text-blue scale-item">
        <div className="w-full text-center mt-4 ">
          <FontAwesomeIcon icon={faPlus} className="fa-3x mb-2" />
        </div>
        <h4 className="text-center text-lg mt-2">Add Address</h4>
      </div>
    </div>
  );
};

export default defaultThumbnail;
