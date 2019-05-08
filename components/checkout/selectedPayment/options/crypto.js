const index = props => {
  return (
    <div className="w-full flex flex-wrap justify-center text-xl font-bold mt-5 mb-12">
      <p className="w-full text-center my-2">
        Proceeding will take you to our cryptocurrency processor.
      </p>
      <img
        alt="bitcoin logo"
        className="h-16"
        src="../static/img/assets/payment/crypto-icons.jpg"
      />
      <p className="w-full text-center my-2">
        **This will open in a new window
      </p>
    </div>
  );
};
export default index;
