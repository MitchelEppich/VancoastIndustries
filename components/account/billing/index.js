import AddressModule from "../address";

const billing = props => {
  let account = props.account.currentUser;
  let billing = account == null ? null : account.billing;

  return (
    <div id="" className="tabcontent">
      <h1>Billing Info</h1>
      <AddressModule {...props} addresses={billing} type="billing" />
    </div>
  );
};

export default billing;
