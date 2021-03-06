const index = props => {
  return (
    <div className="w-full flex flex-wrap justify-center text-xl font-bold mt-5 mb-12">
      <p className="w-full text-center px-2  my-2">
        Proceeding will take you to the instructions on how to pay with Cash.
      </p>
      <img
        alt="cash/cheque logo"
        className="h-16"
        src="../static/img/assets/payment/cash-icon.jpg"
      />
    </div>
  );
};
export default index;
