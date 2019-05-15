const mainImage = props => {
  let img =
    props.currentProduct.company.name == "sonoma seeds"
      ? "../static/img/products/sonoma/so-blue-diesel.jpg"
      : props.currentProduct.company.name == "crop king seeds"
      ? "../static/img/products/cks/cks-white-widow-auto.png"
      : "../static/img/products/sunwest/sw-cheese.png";
  return (
    <div className="vcSingle-sectionTwo flex justify-center items-start ">
      <img
        className="vcSingle-image"
        src={img}
        alt={props.currentProduct.name}
      />
    </div>
  );
};

export default mainImage;
