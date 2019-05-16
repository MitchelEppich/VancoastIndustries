import moment from "moment";
import { itemBuilder } from "../../scripts/savedItems";
import Router from "next/router";

const orders = props => {
  let orders = props.account.recentOrders.map((order, index) => {
    let strains = itemBuilder({
      products: props.shop.strains,
      savedItems: order.strains
    }).map((strain, index) => {
      return (
        <li key={index}>
          {strain.alias}
          <ul>
            <li>
              <span className="vcType capitalize">{strain.type}</span>
            </li>
            <li>
              Brand - <span className="">{strain.company.name}</span>
            </li>
            <li className="vcPanel-qty">
              QTY. x<span className="">{strain.quantity}</span>
            </li>
            <li>
              Price{" "}
              <span className="">
                ${strain.price[strain.size.indexOf(strain.packSize)]}
              </span>
            </li>
          </ul>
        </li>
      );
    });

    return (
      <React.Fragment key={index}>
        <div
          onClick={() => props.showRecentOrder(index)}
          className="vcAccordion flex flex-row justify-between items-center"
        >
          {moment(order.date).format("MMM Do YYYY")}{" "}
          <a
            onClick={e => {
              e.stopPropagation();
              props.reOrder(order);
              Router.push("/checkout");
            }}
          >
            Re-Order
          </a>
        </div>
        {props.account.showRecentOrder == index ? (
          <div className="vcPanel">
            <ul className="vcPanel-orders flex flex-row justify-start list-reset">
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
      <p>Below are your recent orders.</p>
      {orders}
    </div>
  );
};

export default orders;
