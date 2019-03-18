const filters = props => {
  let filters = props.shop.filters;
  let path = props.path;
  filters = Object.entries(filters).map((filter, index) => {
    let options = filter[1].map((value, index) => {
      let checked = false,
        disabled = false,
        readOnly = false;
      if (filter[0] == "Brands") {
        // if (path.includes("shop") && path.length > 6) {
        //   if (path.includes(value.replace(/ /g, "").toLowerCase())) {
        //     checked = true;
        //     readOnly = true;
        //   } else {
        //     disabled = true;
        //     readOnly = true;
        //   }
        // }
      }
      if (props.shop.activeFilters.includes(value.toLowerCase())) {
        checked = true;
      }
      return (
        <label
          key={index}
          className={
            "vcFilter-label " +
            (disabled ? "text-grey-dark cursor-not-allowed" : "")
          }
        >
          {value}
          <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            readOnly={readOnly}
            onChange={() => {
              let isBrandFilterIndex = [
                "",
                "Crop King",
                "Sunwest",
                "Sonoma"
              ].indexOf(value);
              if (isBrandFilterIndex) {
                props.setBrandIndex(isBrandFilterIndex);
              }
              props.toggleFilter({
                activeFilters: props.shop.activeFilters,
                newFilter: value.toLowerCase()
              });
            }}
          />
          <span className="checkmark" />
        </label>
      );
    });
    return (
      <React.Fragment key={index}>
        <h3>{filter[0]}</h3>
        {options}
      </React.Fragment>
    );
  });

  return (
    <div
      id="vcProduct-filters"
      className={props.shop.showFilters ? "showFilters" : ""}
    >
      <div className="vcFilter-list flex flex-col">{filters}</div>
      <div
        onClick={() => props.toggleFilterVisibility(!props.shop.showFilters)}
        className="vcFilters-tab flex flex-col justify-center items-center"
      >
        Filters
        <img src="../static/img/assets/icons/sort-icon.svg" alt="" />
      </div>
    </div>
  );
};
export default filters;
