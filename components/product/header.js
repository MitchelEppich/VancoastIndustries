const header = props => {
  return (
    <header className="vcSingle-intro">
      <h3 className="vcProduct-cat">{props.product.currentProduct.type}</h3>
      <h1 className="flex items-center justify-center">
        {props.product.currentProduct.name}
      </h1>
      <p className="pt-2">{props.product.currentProduct.description}</p>
    </header>
  );
};

export default header;
