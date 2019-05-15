import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";

const index = props => {
  let price =
    props.item.price[props.item.size.indexOf(props.item.packSize)] *
    props.item.quantity;

  return (
    <li className="vcItem vcItem-one flex relative">
      <div className="w-full flex justify-end absolute pin-r pin-t mt-6 ">
        <FontAwesomeIcon
          icon={faTimes}
          className="fa-lg hover:text-blue text-grey-light cursor-pointer"
        />
      </div>
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
            <span>{props.item.packSize} Seeds</span>
          </div>

          <div className="vcItem-price flex flex-col">
            <span className="vcPrefix">Price</span>
            <span>${price.toFixed(2)}</span>
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
