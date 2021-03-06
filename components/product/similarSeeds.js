import Link from "next/link";
import Router from "next/router";
import ProductThumbnail from "../shop/productThumbnail";

const similarSeeds = props => {
  let showCompaniesProducts = props.shop.brands.map((company, index) => {
    let showStrains = () => {
      let arr = [];
      let allStrains = props.shop.strains;

      for (let strain of allStrains) {
        if (strain.company.name.includes(company.name.toLowerCase())) {
          arr.push(
            <ProductThumbnail
              key={strain.sotiId}
              priceColor=""
              strain={strain}
              {...props}
            />
          );
        }
      }
      return arr.slice(0, 3);
    };
    return (
      <div
        key={index}
        className={` ${
          index % 2 === 0 ? "bg-grey-lighter pt-10" : "bg-white"
        } mt-12`}
      >
        <h3 className="vcCompany-similar">Similar Seeds by {company.name}</h3>
        <div className="vcProduct-list flex flex-row justify-center items-baseline">
          {showStrains()}
        </div>
      </div>
    );
  });

  return (
    <div className="vcWholesale-content">{showCompaniesProducts.slice(1)}</div>
  );
};

export default similarSeeds;
