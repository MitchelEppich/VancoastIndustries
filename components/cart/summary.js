const summary = props => {
  return (
    <div className="py-4 bg-white flex flex-row justify-end shadow-lg">
      <div className="vcTotal-qty flex flex-col">
        <span className="vcPrefix">Total QTY.</span>
        <span>x{props.totalItems}</span>
      </div>

      <div className="vcTotal-price flex flex-col">
        <span className="vcPrefix">Price</span>
        <span>${props.total}</span>
      </div>
    </div>
  );
};

export default summary;
