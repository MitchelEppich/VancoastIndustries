let filterStrains = props => {
  let strains = props.shop.strains;
  if (strains == null) {
    return [];
  }
  strains = strains.filter((strain, index) => {
    let show = true;
    if (props.shop.activeFilters.length > 0) {
      let showStrain = !props.shop.activeFilters.some((filter, index) => {
        let filterWords = filter.split(" ");
        filterWords = filterWords.map((x, i) => {
          return x.slice(0, 1).toUpperCase() + x.slice(1);
        });
        filter = filterWords.join(" ");
        if (props.shop.filters.Brands.includes(filter)) {
          if (
            strain.company.name
              .toLowerCase()
              .replace("seeds", "")
              .includes(filter.toLowerCase())
          ) {
            return false;
          } else {
            return true;
          }
        }
        if (
          filter.toLowerCase().includes(strain.genetic.toLowerCase()) ||
          filter.toLowerCase().includes(strain.type.toLowerCase())
        ) {
          return false;
        } else {
          return true;
        }
      });
      show = showStrain;
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
