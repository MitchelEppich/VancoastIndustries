const cartOptions = props => {
  return (
    <React.Fragment>
      <div className="vcSingle-input flex flex-col justify-around items-center">
        <input type="number" name="quantity" defaultValue="0" />

        <input className="vcSingle-submit" type="submit" value="Add To Cart" />
      </div>

      <div className="vcShop-buttons flex flex-row justify-between">
        <button>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </React.Fragment>
  );
};

export default cartOptions;
