const searchBarToggle = props => {
  return (
    <div
      onClick={() => {
        props.toggleSearchBar();
      }}
      id="vancoastSearch"
      className="flex cursor-pointer scale-item"
    >
      <img src="../static/img/assets/icons/vancoast-search.svg" alt="" />
    </div>
  );
};

export default searchBarToggle;
