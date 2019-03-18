const brandLogo = props => {
  console.log(props.currentProduct);
  return (
    <div className="vcSingle-sectionOne flex items-start">
      <img
        className="vcBrand-logo"
        src={props.currentProduct.brandLogoPath}
        alt="sonoma seeds"
      />
    </div>
  );
};

export default brandLogo;
