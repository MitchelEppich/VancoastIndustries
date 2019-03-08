import Item from "./item";

const items = props => {
  let items = Object.values(props.checkout.cart.items);
  items = items.map((item, index) => {
    return <Item key={index} {...props} item={item} />;
  });
  return (
    <div className="h-full mb-24 overflow-y-scroll w-full px-6 shadow-inner">
      {items}
    </div>
  );
};

export default items;
