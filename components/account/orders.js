import moment from "moment";
import { itemBuilder } from "../../scripts/savedItems";
import Router from "next/router";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const orders = props => {
  let orders = props.account.orders.map((order, index) => {
    let cart = {
      ...props.checkout.cart,
      items: { ...props.checkout.cart.items },
      reOrder: true
    };
    let total = 0;
    let strains = itemBuilder({
      products: props.shop.strains,
      savedItems: order.productList
    }).map((strain, index) => {
      cart.items[strain.sotiId + strain.packSize] = {
        amount: strain.packSize,
        per: strain.wholesale[strain.size.indexOf(strain.packSize)],
        price: strain.wholesale[strain.size.indexOf(strain.packSize)],
        product: strain,
        quantity: strain.quantity,
        sale: undefined
      };
      total +=
        strain.wholesale[strain.size.indexOf(strain.packSize)] *
        strain.quantity;
      return (
        <li
          key={index}
          className="py-2 mx-2 bg-white w-220 my-4 border border-grey-light"
        >
          <div className="mx-auto w-full text-center">
            <img
              src="../static/img/products/cks/cks-amnesia-haze.png"
              className="w-16 my-2"
            />
          </div>
          <li className="uppercase font-bold px-4 my-2">{strain.alias}</li>
          <ul className="px-4">
            <li>
              <span className="uppercase text-blue font-bold">
                {strain.type}
              </span>
            </li>
            <li className="text-grey-dark font-bold mt-1">
              Brand - <span className="capitalize">{strain.company.name}</span>
            </li>
          </ul>
          <div className="inline-flex w-full mt-2 text-sm flex justify-between">
            <li className="w-1/3 mr-1 flex-col text-center">
              <span className="text-grey-dark">QTY.</span>
              <p className="">x{strain.quantity}</p>
            </li>
            <li className="w-1/3 mr-1 flex-col text-center">
              <span className="text-grey-dark">Size</span>
              <p className="">{strain.packSize} seeds</p>
            </li>
            <li className="w-1/3 ml-1 flex-col text-center">
              <span className="text-grey-dark">Price</span>
              <p className="">
                ${strain.price[strain.size.indexOf(strain.packSize)].toFixed(2)}
              </p>
            </li>
          </div>
        </li>
      );
    });

    return (
      <React.Fragment key={index}>
        <div
          onClick={() => props.showRecentOrder(index)}
          className="vcAccordion flex flex-row justify-between items-center relative"
        >
          <FontAwesomeIcon
            icon={
              props.account.showRecentOrder == index ? faAngleUp : faAngleDown
            }
            className="fa-2x absolute pin-l mt-0 ml-6 hover:text-grey-light"
          />
          <span className="pl-12">
            {moment(order.date).format("MMM Do YYYY")}{" "}
          </span>
          <span>${total.toFixed(2)}</span>
          <a
            onClick={e => {
              e.stopPropagation();
              props.reOrder({
                cart: cart
              });
              Router.push("/checkout");
            }}
          >
            Add to Cart
          </a>
        </div>
        {props.account.showRecentOrder == index ? (
          <div className="border border-grey-light bg-grey-lighter">
            <ul className="flex flex-wrap p-2 flex-row justify-start list-reset">
              {strains}
            </ul>
          </div>
        ) : null}
      </React.Fragment>
    );
  });

  return (
    <div id="vcRecent-tab" className="tabcontent">
      <h1>Recent Orders</h1>
      <p className="my-4">Below are your recent orders.</p>
      {orders}
    </div>
  );
};

export default orders;
