const index = props => {
  let status, color;
  switch (props.account.approved) {
    case 0:
      status = "pending";
      color = "text-purple";
      break;
    case 1:
      status = "approved";
      color = "text-green";
      break;
    case 2:
      status = "declined";
      color = "text-orange";
      break;
    case 3:
      status = "banned";
      color = "text-red";
      break;
    default:
      status = "pending";
      color = "text-yellow-dark";
      break;
  }
  return (
    <div className="w-full h-16 pt-5 px-4 border flex flex-wrap justify-between text-grey cursor-pointer">
      <p className="w-1/2 uppercase">{props.account.name}</p>
      <p className={color}>{status}</p>
      <p className="text-blue-light">{props.account.website}</p>
    </div>
  );
};

export default index;
