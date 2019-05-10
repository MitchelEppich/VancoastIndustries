const header = props => {
  return (
    <header className="vcSingle-intro w-full">
      <h3 className="vcProduct-cat">{props.product.currentProduct.type}</h3>
      <h1 className="flex text-center justify-center">
        {props.product.currentProduct.alias}
      </h1>
      <p className="pt-2">{props.product.currentProduct.description}</p>
    </header>
  );
};

export default header;
