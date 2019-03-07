const generalSeeds = props => {
  let strains = props.shop.strains.filter((strain, index) => {
    if (props.shop.activeBrandIndex === 0) return true;
    if (
      strain.company.includes(
        props.shop.brands[props.shop.activeBrandIndex].name.toLowerCase()
      )
    )
      return true;
    return false;
  });

  strains = strains.map((product, index) => {
    return (
      <div className="vcProduct-item flex">
        <article>
          <a href="">
            <img
              className="h-300"
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
        {strains.slice(0, 8)}
      </ul>
    </div>
  );
};
export default generalSeeds;
