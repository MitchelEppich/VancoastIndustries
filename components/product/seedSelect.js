const seedSelect = props => {
  return (
    <div className="vcSingle-choices flex flex-row justify-around items-center">
      <input type="radio" id="tenseeds" name="radio" />
      <label htmlFor="tenseeds">
        <span>10 Seeds</span>${props.product.currentProduct.price[1]} ea.
      </label>

      <input type="radio" id="twentyseeds" name="radio" />
      <label htmlFor="twentyseeds">
        <span>20 Seeds</span>${props.product.currentProduct.price[1]} ea.
      </label>

      <input type="radio" id="fiftyseeds" name="radio" />
      <label htmlFor="fiftyseeds">
        <span>50 Seeds</span>${props.product.currentProduct.price[2]} ea.
      </label>
    </div>
  );
};

export default seedSelect;
