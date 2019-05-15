const seedSelect = props => {
  let _product = props.product.currentProduct || props.shop.quickViewModal;
  let _arr = _product.price;
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
    <div className="vcSingle-choices flex flex-row justify-around items-center sm:hidden">
      {_arr}
    </div>
  );
};

export default seedSelect;
