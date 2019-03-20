import Item from "./item";

const items = props => {
  let items = Object.values(props.checkout.cart.items);

  items = items.map((item, index) => {
    return <Item key={index} {...props} item={item} />;
  });
  return (
    <div className="h-full mb-24 overflow-y-auto w-full shadow-inner pt-4">
      {items}
      {items.length == 0 ? (
        <div className="mt-32 font-bold text-center">
          <p className="uppercase text-grey text-2xl pt-32">Empty Cart</p>
          <p className="text-base p-2 opacity-50">
            Sorry, no items found inside your cart!
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default items;
