import Router from "next/router";

const searchBar = props => {
  let searchValue = props.misc.searchValue;
  let searchBarStyle = {
    transform: !props.misc.showSearchBar
      ? "translateY(-250px)"
      : "translateY(140px)"
  };
  return (
    <div
      style={searchBarStyle}
      id="vcSearch-wrap"
      className="inline-flex w-full"
    >
      <div className="w-4/5">
        <input
          className="vcNav-search"
          type="text"
          placeholder="What are you looking for?"
          onChange={e => {
            props.setSearchValue(e.target.value);
          }}
        />
      </div>
      <div className="w-1/5">
        <div
          onClick={() => {
            props.setBrandIndex(0);
            window.scrollTo(0, window.innerHeight * 0.7);
            Router.push("/shop", "/shop?" + searchValue);
          }}
          className="px-4 cursor-pointer hover:bg-grey p-3 bg-blue-new text-white rounded mx-4 text-center text-xl"
        >
          Search
        </div>
      </div>
    </div>
  );
};

export default searchBar;
