import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const item = props => {
  let item = props.item;
  let img =
    item.product.company.name == "sonoma seeds"
      ? "../static/img/products/sonoma/so-blue-diesel.jpg"
      : item.product.company.name == "crop king seeds"
      ? "../static/img/products/cks/cks-white-widow-auto.png"
      : "../static/img/products/sunwest/sw-cheese.png";

  return (
    <div className="vcItem vcItem-one flex flex-row relative">
      <div className="vcItemDiv">
        <img src={img} className="h-24" alt={item.product.alias} />
      </div>

      <div className="vcItem-info uppercase flex flex-col justify-around items-start">
        <h3>
          {item.product.alias} {item.product.type}
        </h3>

        <div className="vcItem-brand">
          <span>Brand - </span>
          <span className="capitalize">{item.product.company.name}</span>
        </div>

        <div className="vcItem-details flex flex-row justify-between">
          <div className="vcItem-qty flex flex-col">
            <span className="vcPrefix">QTY.</span>
            <span>x{item.quantity}</span>
          </div>
          <div className="vcItem-qty flex flex-col">
            <span className="vcPrefix">Pack Size</span>
            <span>{item.amount} Seeds</span>
          </div>

          <div className="vcItem-price flex flex-col">
            <span className="vcPrefix">Price</span>
            <span>${item.price}</span>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          let _identifier = item.product.sotiId + item.amount;
          props.modifyCart({
            items: props.checkout.cart.items,
            action: "REMOVE",
            max: props.checkout.cart.maxPerPackage,
            productIdentifier: _identifier,
            cart: props.checkout.cart
          });
        }}
        className="absolute pin-r hover:bg-blue-new hover:text-white cursor-pointer pin-t w-8 h-8 text-center flex justify-center items-center"
      >
        <FontAwesomeIcon icon={faTimes} className="" />
      </div>
    </div>
  );
};

export default item;
