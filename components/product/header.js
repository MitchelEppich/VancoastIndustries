const header = props => {
  return (
    <header className="vcSingle-intro">
      <h3 className="vcProduct-cat">{props.currentProduct.type}</h3>
      <h1 className="flex items-center justify-center">
        {props.currentProduct.name}
      </h1>
      <p>{props.currentProduct.description}</p>
    </header>
  );
};

export default header;
