import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const index = props => {
  return (
    <div className="w-full relative bg-grey-lighter flex items-center border-b border-grey-light ">
      <FontAwesomeIcon
        icon={faSearch}
        className="ml-4 fa-lg text-grey-light absolute pin-l pin-t mt-4"
      />
      <input
        onChange={e => props.searchAccounts(e.target.value)}
        placeholder="Search for.."
        className="text-grey-dark ml-10 text-base uppercase bg-grey-lighter font-bold pl-3 w-full h-12 "
      />
    </div>
  );
};
export default index;
