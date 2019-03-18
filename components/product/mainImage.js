const mainImage = props => {
  return (
    <div className="vcSingle-sectionTwo flex justify-center items-start">
      <img
        className="vcSingle-image"
        src={props.currentProduct.packagePath}
        alt={props.currentProduct.name}
      />
    </div>
  );
};

export default mainImage;
