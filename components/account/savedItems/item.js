const index = props => {
  let price =
    props.item.price[props.item.size.indexOf(props.item.packSize)] *
    props.item.quantity;

  return (
    <li className="vcItem vcItem-one flex">
      <img
        src="../static/img/products/sonoma/so-bruce-banner.jpg"
        alt="bruce banner"
      />

      <div className="vcItem-info flex flex-col justify-around items-start">
        <h2 className="capitalize">{props.item.alias}</h2>
        <h3 className="vcSaved-cat">{props.item.type}</h3>
        <div className="vcSaved-brand capitalize">
          <span className="uppercase font-bold">Brand - </span>
          {props.item.company.name}
        </div>

        <div className="vcItem-details flex flex-row justify-start">
          <div className="vcItem-qty flex flex-col">
            <span className="vcPrefix">QTY.</span>
            <span>x{props.item.quantity}</span>
          </div>
          <div className="vcItem-qty flex flex-col">
            <span className="vcPrefix">Pack Size</span>
            <span>{props.item.size[0]} Seeds</span>
            {console.log(props.item)}
          </div>

          <div className="vcItem-price flex flex-col">
            <span className="vcPrefix">Price</span>
            <span>${price}</span>
          </div>
        </div>
        <button className="vcSaved-btn" href="#">
          Add To Cart
        </button>
      </div>
    </li>
  );
};

export default index;
