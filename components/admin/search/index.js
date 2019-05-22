import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const index = props => {
  return (
    <div className="w-full relative bg-white flex items-center">
      <FontAwesomeIcon
        icon={faSearch}
        className="ml-4 fa-lg text-grey-light absolute pin-l pin-t mt-3"
      />
      <input
        onChange={e => props.searchAccounts(e.target.value)}
        placeholder="Search for.."
        className="text-grey-dark ml-10 text-base uppercase bg-white font-bold pl-3 w-full h-10 "
      />
    </div>
  );
};
export default index;
