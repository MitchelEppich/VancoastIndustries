const seedSelect = props => {
  let _product = props.product.currentProduct || props.shop.quickViewModal;
  let _arr = _product.wholesale;
  _arr = _arr.map((price, index) => {
    let numberOfSeeds = _product.size[index];
    if (price < 0) return null;
    return (
      <React.Fragment key={index}>
        <input type="radio" id={numberOfSeeds + "seeds"} name="seedPackSize" />
        <label
          onClick={() => props.quickAddToCartQty(index)}
          htmlFor={numberOfSeeds + "seeds"}
          className={
            props.product.quickAddToCartQty == index
              ? "border-4 border-blue scale-item"
              : "border-4 border-offWhite scale-item"
          }
        >
          <span>{numberOfSeeds} Seeds</span>${price} ea.
        </label>
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <div className="vcSingle-choices flex flex-row justify-around items-center sm:hidden">
        {_arr}
      </div>
      <p className="w-full px-5 text-grey text-xl text-center font-bold sm:hidden">
        Sell at...${_product.price[props.product.quickAddToCartQty]} ea.
      </p>
    </React.Fragment>
  );
};

export default seedSelect;
