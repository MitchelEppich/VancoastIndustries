import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const item = props => {
  let item = props.item;
  return (
    <div className="vcItem vcItem-one flex flex-row relative">
      <div className="vcItemDiv">
        <img
          src={item.product.packagePath}
          className="h-24"
          alt={item.product.name}
        />
      </div>

      <div className="vcItem-info flex flex-col justify-around items-start">
        <h3>
          {item.product.name} ({item.product.type})
        </h3>

        <div className="vcItem-brand">
          <span>Brand - </span>
          <span className="capitalize">{item.product.company[0]}</span>
        </div>

        <div className="vcItem-details flex flex-row justify-start">
          <div className="vcItem-qty flex flex-col">
            <span className="vcPrefix">QTY.</span>
            <span>x{item.quantity}</span>
          </div>

          <div className="vcItem-price flex flex-col">
            <span className="vcPrefix">Price</span>
            <span>${item.price}</span>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          console.log(item);
          //   props.modifyCart({
          //     items: items,
          //     action: "REMOVE",
          //     // max: props.cart.maxPerPackage,
          //     productIdentifier: item
          //   });
        }}
        className="absolute pin-r hover:bg-blue-new hover:text-white cursor-pointer pin-t w-8 h-8 text-center flex justify-center items-center"
      >
        <FontAwesomeIcon icon={faTimes} className="" />
      </div>
    </div>
  );
};

export default item;
