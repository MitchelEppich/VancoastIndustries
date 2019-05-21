import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

const index = props => {
  let sortOptions = ["pending", "approved", "declined", "banned"].map(
    (status, index) => {
      let border = index == 3 ? "rounded-bl-full rounded-br-full" : "";
      return (
        <option key={index} value={index}>
          {status}
        </option>
      );
    }
  );
  return (
    <div className="w-full relative inline-flex flex items-center">
      <FontAwesomeIcon
        icon={faSlidersH}
        className="ml-4 fa-lg text-grey-light absolute pin-l pin-t mt-4"
      />

      <select
        className="ml-12 h-12 text-base text-grey-dark uppercase font-bold"
        onChange={e => {
          props.sortAccounts(parseInt(e.target.value));
        }}
        name="sortOptions"
        id="sortOptions"
      >
        <option>Sort by...</option>
        {sortOptions}
      </select>
    </div>
  );
};

export default index;
