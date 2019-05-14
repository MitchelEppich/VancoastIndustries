let filterStrains = props => {
  let strains = props.shop.strains;
  if (strains == null) {
    return [];
  }
  strains = strains.filter((strain, index) => {
    let show = true;
    let activeFilters = props.shop.activeFilters;
    let filterCategories = Object.keys(props.shop.activeFilters);
    for (let i = 0; i < filterCategories.length; i++) {
      switch (filterCategories[i]) {
        case "Brands":
          if (
            strain.company.name.toLowerCase() !=
              activeFilters["Brands"].toLowerCase() &&
            activeFilters["Brands"].length > 0
          )
            show = false;
          break;
        case "Type":
          if (
            strain.type.toLowerCase() != activeFilters["Type"].toLowerCase() &&
            activeFilters["Type"].length > 0
          )
            show = false;
          break;
        case "Strain Kind":
          if (
            strain.genetic.toLowerCase() !=
              activeFilters["Strain Kind"].toLowerCase() &&
            activeFilters["Strain Kind"].length > 0
          )
            show = false;
          break;
      }
    }
    if (props.shop.activeBrandIndex > 0) {
      if (
        !strain.company.name.includes(
          props.shop.brands[props.shop.activeBrandIndex].name.toLowerCase()
        )
      ) {
        return false;
      }
    }
    return show;
  });

  return strains;
};

module.exports = { filterStrains };
