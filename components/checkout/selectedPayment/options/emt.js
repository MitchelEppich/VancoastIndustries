const index = props => {
  return (
    <div className="w-full flex flex-wrap  justify-center text-xl font-bold mt-5 mb-12">
      <p className="w-full text-center my-2">
        Proceeding will take you to the instructions on how to pay with Money
        Transfer.
      </p>
      <img
        alt="interac logo"
        className="h-16"
        src="../static/img/assets/payment/interac-transfer.jpg"
      />
    </div>
  );
};
export default index;
