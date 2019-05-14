import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { SeedSelect, Header, CartOptions, MainImage } from "..";
const QuickView = props => {
  let img =
    props.currentProduct != null &&
    props.currentProduct.company.name == "sonoma seeds"
      ? "../static/img/products/sonoma/so-blue-diesel.jpg"
      : props.currentProduct != null &&
        props.currentProduct.company.name == "crop king seeds"
      ? "../static/img/products/cks/cks-white-widow-auto.png"
      : "../static/img/products/sunwest/sw-cheese.png";

  return (
    <div className="absolute w-500 md:w-400 sm:w-300 bg-white shadow-md z-50 -ml-24 sm:ml-0 md:ml-0 pin-t -mt-10">
      <div
        onClick={() => {
          props.setQuickView({ showQuickViewProduct: false });
        }}
        className="flex w-full p-2 pin-t pin-r justify-end pr-3"
      >
        <FontAwesomeIcon
          icon={faTimes}
          className="fa-2x cursor-pointer hover:text-blue"
        />
      </div>
      <div className="w-200 mx-auto flex justify-center items-start">
        <img className="vcSingle-image" src={img} />
      </div>

      <Header {...props} />
      <SeedSelect {...props} />
      <CartOptions {...props} />
    </div>
  );
};

export default QuickView;
