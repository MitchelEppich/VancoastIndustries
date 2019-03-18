import { filterStrains } from "../../store/utilities/filterVancoast";
import ProductThumbnail from "./productThumbnail";

const generalStrains = props => {
  let strains = filterStrains(props);
  strains = strains.map((strain, index) => {
    return (
      <ProductThumbnail key={index} priceColor="" strain={strain} {...props} />
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
export default generalStrains;
