const index = props => {
  let status = props.admin.statuses[props.account.approved];
  return (
    <div
      onClick={() => props.setAccountView(props.account)}
      className="w-full h-16 pt-5 px-4 border flex flex-wrap justify-between text-grey cursor-pointer"
    >
      <p className="w-1/2 uppercase">{props.account.name}</p>
      <p className={`uppercase text-${status.color}`}>{status.label}</p>
      <p className="text-blue-light">{props.account.website}</p>
    </div>
  );
};

export default index;
