const generalSeeds = props => {
  let strains = props.shop.strains.filter((strain, index) => {
    if (props.shop.activeBrandIndex > 0) {
      if (
        strain.company.includes(
          props.shop.brands[props.shop.activeBrandIndex].name.toLowerCase()
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
    if (props.shop.activeFilters.length > 0) {
      let showStrain = !props.shop.activeFilters.some((filter, index) => {
        let filterWords = filter.split(" ");
        filterWords = filterWords.map((x, i) => {
          return x.slice(0, 1).toUpperCase() + x.slice(1);
        });
        filter = filterWords.join(" ");
        if (props.shop.filters.Brands.includes(filter)) {
          if (
            strain.company[0]
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
      return showStrain;
    }
    return true;
  });

  strains = strains.map((product, index) => {
    return (
      <div key={index} className="vcProduct-item flex">
        <article>
          <a href="" className="mx-auto">
            <img
              className="h-300 mx-auto"
              src={product.packagePath}
              alt={product.name}
            />
          </a>
          <header className="vcProduct-info flex flex-col">
            <h2>
              <a href="">{product.name}</a>
            </h2>
            <div className="vcProduct-info flex flex-row justify-between">
              <h3 className="vcProduct-cat">Indica</h3>
              <p className="vcProduct-price">from $25</p>
            </div>
          </header>
        </article>
        <a href="">
          <img
            className="quick-view"
            title="quick view"
            src="../static/img/assets/icons/quick-view.svg"
            alt="quick view"
          />
        </a>
      </div>
    );
  });
  return (
    <div className="vcWholesale-content">
      <ul className="vcProduct-list mx-auto w-1000 flex flex-row justify-center items-baseline">
        {strains}
      </ul>
    </div>
  );
};
export default generalSeeds;
