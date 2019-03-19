const brandLogo = props => {
  return (
    <div className="vcSingle-sectionOne flex items-start">
      <img
        className="vcBrand-logo"
        src={props.product.currentProduct.brandLogoPath}
        alt="sonoma seeds"
      />
    </div>
  );
};

export default brandLogo;
