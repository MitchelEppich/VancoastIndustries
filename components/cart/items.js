import Item from "./item";

const items = props => {
  let items = Object.values(props.checkout.cart.items);
  items = items.map((item, index) => {
    return <Item key={index} {...props} item={item} />;
  });
  return <div className="h-600 overflow-y-scroll w-full">{items}</div>;
};

export default items;
