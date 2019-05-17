import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const defaultThumbnail = props => {
    return (
        <div onClick={() => {
            // props.updateAccount({ _id: account._id, shipping: [address] })
            props.setAddressToEdit({})
        }} className="cursor-pointer hover:text-blue border-2 border-grey-light opacity-75 border-dashed rounded p-3 w-300 text-sm h-200 m-4 scale-item flex items-center content-center justify-center flex-wrap">
            <div className="w-full text-center">

                <FontAwesomeIcon
                    icon={faPlus}
                    className="fa-3x mb-2"
                />
            </div>
            <h4 className="text-center text-lg">Add Address</h4>
        </div>
    );
};

export default defaultThumbnail;
