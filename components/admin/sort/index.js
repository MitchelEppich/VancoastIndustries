import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

const index = props => {
  let sortOptions = ["pending", "approved", "declined", "banned"].map(
    (status, index) => {
      let border = index == 3 ? "rounded-bl-full rounded-br-full" : "";
      return (
        // <option key={index} value={index}>
        //   {status}
        // </option>
        <div
          key={index}
          onClick={() => {
            props.sortAccounts(parseInt(index));
            props.toggleShowOrderBy();
          }}
          className={`w-150 text-center p-2 font-bold hover:text-white hover:bg-blue-purple cursor-pointer ${
            props.admin.sortByIndex == index
              ? "bg-grey-darker text-white"
              : "bg-white text-grey-dark"
          }`}
        >
          {status}
        </div>
      );
    }
  );
  return (
    <div className="w-full relative inline-flex flex items-center relative">
      <FontAwesomeIcon
        onClick={() => {
          props.toggleShowOrderBy();
        }}
        icon={faSlidersH}
        className="mr-4 fa-lg -mt-2 text-grey-light absolute pin-r hover:text-white cursor-pointer"
      />
      {/* 
      <select
        className="ml-12 text-base text-grey-dark uppercase font-bold"
        onChange={e => {
          props.sortAccounts(parseInt(e.target.value));
        }}
        name="sortOptions"
        id="sortOptions"
      >
        <option>Sort by...</option>
        {sortOptions}
      </select> */}
      {props.admin.showOrderBy ? (
        <div className="ml-12 mt-20 mr-2 shadow-md absolute pin-r text-sm uppercase z-50">
          {sortOptions}
        </div>
      ) : null}
    </div>
  );
};

export default index;
