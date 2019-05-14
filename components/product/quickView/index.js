// import SeedSelect from "../seedSelect";
// import Link from "next/link";

// const index = props => {
//   let product = props.shop.quickViewModal,
//     cart = props.checkout.cart,
//     maxPerPackage = cart.maxPerPackage,
//     potentialQuantity = cart.potentialQuantity,
//     coupon = props.checkout.orderDetails.coupon;
//   return (
//     <div className="w-screen h-screen bg-semi-transparent z-50 fixed">
//       <div className="vcSingle vcQuick flex justify-center items-center">
//         <div className="vcSingle-sectionThree flex flex-col justify-center items-start">
//           <header className="vcSingle-intro flex justify-center items-center flex-col w-full">
//             <img
//               className="h-200"
//               src="../static/img/products/sunwest/single-front/sw-kali-mist-406x412.png"
//               alt="kali mist"
//             />
//             <h3 className="vcProduct-cat">{product.type}</h3>
//             <h1 className="flex items-center justify-center">
//               {product.alias}
//             </h1>
//           </header>
//           <SeedSelect {...props} />

//           <div className="vcSingle-input flex flex-col justify-around items-center">
//             <input
//               type="number"
//               onBlur={e => {
//                 let _value = e.target.value;
//                 if (_value == null || _value == "" || parseInt(_value) < 1) {
//                   props.modifyPotentialQuantity({
//                     potentialQuantity: potentialQuantity,
//                     action: "SET",
//                     max: maxPerPackage,
//                     quantity: 1
//                   });
//                 }
//               }}
//               onChange={e => {
//                 let _value = e.target.value;
//                 props.modifyPotentialQuantity({
//                   potentialQuantity: potentialQuantity,
//                   action: "SET",
//                   max: maxPerPackage,
//                   quantity: parseInt(_value),
//                   cart: cart
//                 });
//               }}
//               defaultValue="1"
//               name="quantity"
//             />

//             <input
//               className="vcSingle-submit"
//               type="submit"
//               value="Add To Cart"
//               onClick={() => {
//                 if (props.account.currentUser == null) {
//                   props.toggleAlert({
//                     message: "Please log in to continue",
//                     message2: "You have to be logged in to do that",
//                     action: "login", //Router.push("/login"),
//                     actionName: "Login"
//                   });
//                 } else {
//                   let _identifier =
//                     product.sotiId +
//                     product.size[props.product.quickAddToCartQty];
//                   props.modifyCart({
//                     cart: cart,
//                     action: "APPEND",
//                     max: maxPerPackage,
//                     productIdentifier: _identifier,
//                     product: product,
//                     quantity: potentialQuantity,
//                     coupon: coupon
//                   });
//                 }
//               }}
//             />
//           </div>

//           <div className="vcShop-buttons flex flex-row justify-between">
//             <button onClick={() => props.toggleModal(null)}>
//               Continue Shopping
//             </button>
//             <Link prefetch href="/checkout">
//               <button
//                 onClick={e => {
//                   props.toggleModal(null);
//                   if (props.account.currentUser == null) {
//                     e.preventDefault();
//                     props.toggleAlert({
//                       message: "Please log in to continue",
//                       message2: "You have to be logged in to do that",
//                       action: "login", //Router.push("/login"),
//                       actionName: "Login"
//                     });
//                   }
//                   if (Object.entries(props.checkout.cart.items).length < 1) {
//                     e.preventDefault();
//                     props.toggleAlert({
//                       message: "Your cart is empty!",
//                       message2: "Please add to your cart",
//                       action: "shop", //Router.push("/shop"),
//                       actionName: "Shop"
//                     });
//                   }
//                 }}
//               >
//                 Checkout
//               </button>
//             </Link>
//           </div>

//           <a onClick={() => props.toggleModal(null)}>
//             <img
//               className="quick-view cursor-pointer"
//               title="quick view"
//               src="../static/img/assets/icons/quick-view.svg"
//               alt="quick view"
//             />
//           </a>
//         </div>
//       </div>
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
    <div className="absolute w-500 md:w-400 sm:w-300 bg-white shadow-md z-50 -ml-24 sm:ml-0 md:ml-0 pin-t">
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
