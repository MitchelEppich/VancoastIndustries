const productThumbnail = props => {
  return (
    <div className="vcProduct-item p-2 flex">
      <article>
        <img
          className="h-200 mx-auto"
          src={props.product.packagePath}
          alt={props.product.name}
        />
        <header className="vcProduct-info flex flex-col">
          <h2>
            <a href="">{props.product.name}</a>
          </h2>
          <div className="vcProduct-info flex flex-row justify-between">
            <h3 className="vcProduct-cat">{props.product.type}</h3>
            <p className="vcProduct-price">from ${props.product.price[1]}</p>
          </div>
        </header>
      </article>
      {/* <a href="">
        <img
          className="quick-view"
          title="quick view"
          src="../static/img/assets/icons/quick-view.svg"
          alt="quick view"
        />
      </a> */}
    </div>
  );
};
export default productThumbnail;
