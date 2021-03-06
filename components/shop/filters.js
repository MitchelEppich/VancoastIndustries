import Router from "next/router";

const filters = props => {
  let filters = props.shop.filters;
  let path = Router.asPath;
  filters = Object.entries(filters).map((filter, index) => {
    let options = filter[1].map((value, index) => {
      let checked = false,
        disabled = false,
        readOnly = false;
      if (value === "Wholesale") return null;
      if (filter[0] == "Brands") {
        if (
          path !== null &&
          path.includes("shop") &&
          path.length > 6 &&
          !path.includes("?")
        ) {
          if (path.includes(value.replace(/ /g, "").toLowerCase())) {
            checked = true;
            readOnly = true;
          } else {
            disabled = true;
            readOnly = true;
          }
        }
      }
      if (
        JSON.stringify(props.shop.activeFilters).includes(value.toLowerCase())
      ) {
        checked = true;
      }

      return (
        <label
          key={index}
          className={
            filter[0] == "Brands"
              ? "sm:hidden vcFilter-label"
              : "vcFilter-label "
          }
        >
          {value}
          <input
            type="checkbox"
            checked={checked}
            onChange={() => {
              let isBrandFilterIndex = props.shop.filters.Brands.indexOf(value);
              if (isBrandFilterIndex > -1) {
                if (checked) {
                  props.setBrandIndex(0);
                  Router.push("/shop");
                } else {
                  props.setBrandIndex(isBrandFilterIndex);
                  Router.push(
                    "/shop",
                    "/shop/" + value.replace(/ /g, "").toLowerCase()
                  );
                }
              }
              props.toggleFilter({
                activeFilters: props.shop.activeFilters,
                category: filter[0],
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
        <h3 className={filter[0] == "Brands" ? "sm:hidden" : ""}>
          {filter[0]}
        </h3>
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
