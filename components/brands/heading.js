const heading = props => {
    let brand = props.shop.brands[props.shop.activeBrandIndex];

    return (
        <div
            className={props.shop.activeBrandIndex == 0 ? "vcWholesale-content" : "vcWholesale-content vcCompany-page"}>
            <div className="vcWholesale-header flex flex-col justify-center items-center">
                <h1 className={props.shop.activeBrandIndex == 0 ? "flex flex-col" : "flex"}>{brand.name}</h1>
                <h3 className="flex">{brand.motto}</h3>
            </div>

            <p className="wholesale-intro">{brand.introOne}</p>
            <p className="wholesale-intro">{brand.introTwo}</p>
        </div>
    );
};
export default heading;
