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
      className="inline-flex w-full"
      onSubmit={e => {
        e.preventDefault();
        props.setBrandIndex(0);
        window.scrollTo(0, window.innerHeight * 0.7);
        Router.push("/shop", "/shop?" + searchValue);
      }}
    >
      <div className="w-full">
        <input
          aria-label="search"
          className="vcNav-search"
          type="text"
          placeholder="What are you looking for?"
          onChange={e => {
            props.setSearchValue(e.target.value);
          }}
        />
      </div>
      <div className="">
        <input
          value="Search"
          type="submit"
          className="px-4 sm:px-1 sm:text-lg cursor-pointer hover:bg-grey p-3 bg-blue-new text-white rounded mx-4 text-center text-xl"
        />
      </div>
    </form>
  );
};

export default searchBar;
