const similarSeeds = props => {
  let showCompaniesProducts = props.shop.brands.map((company, index) => {
    let showStrains = () => {
      let arr = [];
      let allStrains = props.shop.strains;

      for (let strain of allStrains) {
        if (strain.company.includes(company.name.toLowerCase())) {
          arr.push(
            <li className="vcProduct-item flex scale-item">
              <article>
                <a href="">
                  <img src={strain.packagePath} alt={strain.name} />
                </a>
                <header className="text-sm uppercase flex flex-col">
                  <h2 className="text-left p-1">
                    <a href="">{strain.name}</a>
                  </h2>
                  <div className="vcProduct-info flex flex-row justify-between my-3">
                    <h3 className="vcProduct-cat px-1">{strain.type}</h3>
                    <p className="vcProduct-price font-bold">
                      from ${strain.price[1]}
                    </p>
                  </div>
                </header>
              </article>
            </li>
          );
        }
      }
      return arr.slice(0, 3);
    };
    return (
      <div
        className={` ${
          index % 2 === 0 ? "bg-grey-lightest" : "bg-white"
        } mt-12`}
      >
        <h3 className="vcCompany-similar">Similar Seeds by {company.name}</h3>
        <ul className="vcProduct-list flex flex-row justify-center items-baseline">
          {showStrains()}
        </ul>
      </div>
    );
  });

  return <div className="vcWholesale-content">{showCompaniesProducts}</div>;
};

export default similarSeeds;
