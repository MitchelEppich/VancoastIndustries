const heading = props => {
  let brand = props.shop.brands[props.shop.activeBrandIndex];

  return (
    <div
      className={
        props.shop.activeBrandIndex == 0
          ? "vcWholesale-content"
          : "vcWholesale-content vcCompany-page"
      }
    >
      <div className="vcWholesale-header flex flex-col justify-center items-center">
        {props.shop.activeBrandIndex == 0 ? (
          <h1 className="flex flex-col">
            {brand.name}
            {/* {brand.name.slice(0, brand.name.indexOf(" "))} */}
            <span>Cannabis Seed Shop</span>
          </h1>
        ) : (
          <h1 className="flex flex-col">{brand.name}</h1>
        )}
        <h3 className="flex">{brand.motto}</h3>
      </div>

      <p className="wholesale-intro">{brand.introOne}</p>
      <p className="wholesale-intro">{brand.introTwo}</p>
    </div>
  );
};
export default heading;
