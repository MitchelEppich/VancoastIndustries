import AddressModule from "../address"

const shipping = props => {
  let account = props.account.currentUser;
  let shipping = account == null ? null : account.shipping;

  return (
    <div id="" className="tabcontent">
      <h1>Shipping Info</h1>
      <AddressModule {...props} addresses={shipping} type="shipping" />
    </div>
  );
};

export default shipping;
