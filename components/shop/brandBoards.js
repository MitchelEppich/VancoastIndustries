import BrandBoard from "./brandBoard";

const brandBoards = props => {
  let brands = props.shop.brands;
  brands = brands.map((brand, index) => {
    return (
      <BrandBoard
        key={index}
        class={brand.boardClass}
        description={brand.description}
        name={brand.name}
        logo={brand.logo}
        brandIndex={index}
        {...props}
      />
    );
  });
  return <div>{brands.slice(1)}</div>;
};

export default brandBoards;
