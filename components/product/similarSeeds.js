import Link from "next/link";
import Router from "next/router";

const similarSeeds = props => {
  let showCompaniesProducts = props.shop.brands.map((company, index) => {
    let showStrains = () => {
      let arr = [];
      let allStrains = props.shop.strains;

      for (let strain of allStrains) {
        if (strain.company.includes(company.name.toLowerCase())) {
          arr.push(
            <a
              onClick={() => {
                props.setCurrentProduct({ product: strain });
                props.setBrandIndex(
                  props.shop.brands.findIndex((brand, index) => {
                    return brand.name.toLowerCase() === strain.company[0];
                  })
                );
                Router.push(
                  "/product#" + strain.name.toLowerCase().replace(/ /g, "")
                );
                window.scrollTo(0, 0);
              }}
              className="vcProduct-item flex scale-item"
            >
              <article>
                <img src={strain.packagePath} alt={strain.name} />
                <header className="text-sm uppercase flex flex-col">
                  <h2 className="text-left p-1">{strain.name}</h2>
                  <div className="vcProduct-info flex flex-row justify-between my-3">
                    <h3 className="vcProduct-cat px-1">{strain.type}</h3>
                    <p className="vcProduct-price font-bold">
                      from ${strain.price[1]}
                    </p>
                  </div>
                </header>
              </article>
            </a>
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
        <div className="vcProduct-list flex flex-row justify-center items-baseline">
          {showStrains()}
        </div>
      </div>
    );
  });

  return <div className="vcWholesale-content">{showCompaniesProducts}</div>;
};

export default similarSeeds;
