const header = props => {
  return (
    <header className="vcSingle-intro w-full">
      <h3 className="vcProduct-cat">{props.product.currentProduct.type}</h3>
      <h1 className="flex text-center justify-center">
        {props.product.currentProduct.alias}
      </h1>
      {props.product.showFullSummary ? (
        <p
          className="pt-2"
          onClick={() => {
            props.toggleFullSummary();
          }}
        >
          {props.product.currentProduct.summary}
          <span className="font-bold ml-2 text-blue cursor-pointer">
            {" "}
            Read Less
          </span>
        </p>
      ) : (
        <p
          className="pt-2"
          onClick={() => {
            props.toggleFullSummary();
          }}
        >
          {props.product.currentProduct.summary.substring(0, 300) + "..."}{" "}
          <span className="font-bold ml-2 text-blue cursor-pointer">
            {" "}
            Read More
          </span>
        </p>
      )}
    </header>
  );
};

export default header;
