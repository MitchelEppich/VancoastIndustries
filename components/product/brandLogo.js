const brandLogo = props => {
  let img =
    props.currentProduct.company.name == "sonoma seeds"
      ? "../static/img/assets/sonoma-logo.png"
      : props.currentProduct.company.name == "crop king seeds"
      ? "../static/img/assets/cks-logo.png"
      : "../static/img/assets/sunwest-logo.png";
  return (
    <div className="vcSingle-sectionOne md:hidden lg:hidden flex items-start">
      <img
        className="vcBrand-logo"
        src={img}
        alt={props.product.currentProduct.company} // need to be fixed
      />
    </div>
  );
};

export default brandLogo;
