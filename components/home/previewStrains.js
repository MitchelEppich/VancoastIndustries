import Link from "next/link";
import ProductThumbnail from "../shop/productThumbnail";
import ProductItem from "./productItem";

const previewStrains = props => {
  let strains = props.shop.strains.map((strain, index) => {
    return (
      <ProductItem priceColor="black" strain={strain} {...props} key={index} />
      // <div key={index} className="vcShop-box flex justify-center items-center">
      //   <img className="h-200" src={strain.packagePath} alt={strain.name} />
      // </div>
    );
  });

  return (
    <React.Fragment>
      <h2>
        <span className="vcShop-shop">Shop</span>{" "}
        <span className="vcShop-strains">Cannabis Strains</span>
      </h2>
      <div className="vcShop-bg">
        <div className="vcShop-wrap flex justify-center">
          {strains.slice(0, 15)}
        </div>

        <div className="vcShop-btns flex flex-row justify-center mt-4">
          <Link prefetch href="/shop">
            <button className="vcShop-all">View All</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default previewStrains;
