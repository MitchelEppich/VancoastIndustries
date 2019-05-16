const SeedSelectorMobile = props => {
  let _product = props.product.currentProduct || props.shop.quickViewModal;
  let _arr = _product.wholesale;
  _arr = _arr.map((price, index) => {
    let numberOfSeeds = _product.size[index];

    if (price < 0) return null;
    return (
      <option
        value={index}
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
    <div className="vcSingle-choices flex flex-col justify-around items-center md:hidden lg:hidden xl:hidden xxl:hidden">
      <p className="p-2">Options:</p>
      <select
        onChange={e => props.quickAddToCartQty(e.target.value)}
        className="bg-grey-light w-full p-2"
      >
        {_arr}
      </select>
      <p className="w-full mt-3 px-5 text-grey text-xl text-center font-bold md:hidden lg:hidden xl:hidden xxl:hidden">
        Sell at...${_product.price[props.product.quickAddToCartQty]} ea.
      </p>
    </div>
  );
};

export default SeedSelectorMobile;
