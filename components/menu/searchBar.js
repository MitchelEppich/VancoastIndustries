import Router from "next/router";

const searchBar = props => {
  let searchValue = props.misc.searchValue;
  let searchBarStyle = {
    transform: !props.misc.showSearchBar
      ? "translateY(-250px)"
      : "translateY(140px)"
  };
  return (
    <form
      style={searchBarStyle}
      id="vcSearch-wrap"
      className="flex w-full justify-between"
      onSubmit={e => {
        e.preventDefault();
        props.toggleSearchBar(false);
        props.setBrandIndex(0);
        window.scrollTo(0, window.innerHeight * 0.7);
        Router.push("/shop", "/shop?" + searchValue);
      }}
    >
      <div className="w-full sm:w-2/3">
        <input
          aria-label="search"
          className="vcNav-search"
          type="text"
          placeholder={
            props.misc.mediaSize == "sm"
              ? "Search"
              : "What are you looking for?"
          }
          onChange={e => {
            props.setSearchValue(e.target.value);
          }}
        />
      </div>
      <input
        value="Search"
        type="submit"
        className="h-full px-4 cursor-pointer hover:bg-grey p-3 bg-blue-new text-white rounded mx-4 text-center text-xl sm:text-sm sm:m-0"
      />
    </form>
  );
};

export default searchBar;
