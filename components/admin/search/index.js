import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const index = props => {
  return (
    <div className="w-full relative h-10  bg-grey-light flex items-center">
      <FontAwesomeIcon
        icon={faSearch}
        className="ml-4 fa-lg text-grey-dark absolute pin-l pin-t mt-3"
      />
      <input
        onChange={e => props.searchAccounts(e.target.value)}
        placeholder="Search..."
        className="text-grey-dark pl-12 text-base uppercase bg-grey-light h-full font-bold w-full "
      />
    </div>
  );
};
export default index;
