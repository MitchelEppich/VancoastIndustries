const index = props => {
  let status = props.admin.statuses[props.account.approved];
  return (
    <div
      onClick={() => props.setAccountView(props.account)}
      className="w-full h-16 pt-2 border border-grey-light flex flex-wrap justify-between text-grey cursor-pointer items-center hover:bg-grey-lighter"
    >
      <div className="inline-flex w-full">
        <p className="w-3/5 pl-3 uppercase text-base text-grey-dark font-bold">
          {props.account.company.length > 15
            ? props.account.company.substring(0, 15) + "..."
            : props.account.company}
        </p>
        <p
          className={`uppercase text-sm w-2/5 pl-5 text-center font-bold text-${
            status.color
          }`}
        >
          {status.label}
        </p>
      </div>
      <p className="text-grey-darker lowercase pl-3 font-bold text-sm ">
        {props.account.email}
      </p>
    </div>
  );
};

export default index;
