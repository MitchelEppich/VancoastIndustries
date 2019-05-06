import { filterStrains } from "../../store/utilities/filterVancoast";
import ProductThumbnail from "./productThumbnail";

const generalStrains = props => {
  let strains = props.shop.strains || [];
  strains = filterStrains(props);
  if (props.misc.searchValue.length > 1) {
    strains = strains.filter((strain, index) => {
      return JSON.stringify(strain)
        .toLowerCase()
        .includes(props.misc.searchValue.toLowerCase());
    });
  }
  strains = strains.map((strain, index) => {
    return (
      <ProductThumbnail key={index} priceColor="" strain={strain} {...props} />
    );
  });
  return (
    <div className="vcWholesale-content">
      <ul className="vcProduct-list mx-auto w-4/5 flex flex-row justify-center items-baseline">
        {strains}
      </ul>
    </div>
  );
};
export default generalStrains;
