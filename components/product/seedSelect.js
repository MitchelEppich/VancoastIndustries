const seedSelect = props => {
  let _product = props.product.currentProduct;
  let _arr = _product.price;
  _arr = _arr.map((price, index) => {
    let numberOfSeeds = [10, 20, 50][index];
    if (price < 0) return null;
    return (
      <React.Fragment key={index}>
        <input type="radio" id={numberOfSeeds + "seeds"} name="seedPackSize" />
        <label
          onClick={() => props.quickAddToCartQty(index)}
          htmlFor={numberOfSeeds + "seeds"}
          className={
            props.product.quickAddToCartQty == index
              ? "border-4 border-blue"
              : "border-4 border-offWhite"
          }
        >
          <span>{numberOfSeeds} Seeds</span>${price} ea.
        </label>
      </React.Fragment>
    );
  });

  return (
    <div className="vcSingle-choices flex flex-row justify-around items-center">
      {_arr}
    </div>
  );
};

export default seedSelect;