const index = props => {
  let status = props.admin.statuses[props.account.approved];
  return (
    <div
      onClick={() => props.setAccountView(props.account)}
      className="w-full h-16 pt-2 px-2 border border-grey-light flex flex-wrap justify-between text-grey cursor-pointer items-center"
    >
      <p className="w-3/5 uppercase text-base text-grey-dark font-bold">
        {props.account.name}
      </p>
      <p className={`uppercase text-sm font-bold text-${status.color}`}>
        {status.label}
      </p>
      <p className="text-grey-darker font-bold text-sm ">
        {props.account.website}
      </p>
    </div>
  );
};

export default index;
