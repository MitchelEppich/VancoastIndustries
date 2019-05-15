const SeedSelectorMobile = props => {
  let _product = props.product.currentProduct || props.shop.quickViewModal;
  let _arr = _product.price;
  _arr = _arr.map((price, index) => {
    let numberOfSeeds = _product.size[index];

    if (price < 0) return null;
    return (
      <option
        onClick={() => props.quickAddToCartQty(index)}
        value={numberOfSeeds + "seeds"}
        className={
          props.product.quickAddToCartQty == index
            ? "border-4 border-blue"
            : "border-4 border-offWhite"
        }
      >
        {numberOfSeeds} Seeds - ${price} ea.
      </option>
    );
  });

  return (
    <div className="vcSingle-choices flex flex-col justify-around items-center">
      <p className="p-2">Options:</p>
      <select className="bg-grey-light w-full p-2">{_arr}</select>
    </div>
  );
};

export default SeedSelectorMobile;
