import AccountListing from "./accountListing";
import AccountView from "./accountView";

const index = props => {
  let accounts = props.admin.accounts.map((account, index) => {
    return <AccountListing key={index} {...props} account={account} />;
  });
  return (
    <div className="w-full h-700 rounded-lg flex bg-white shadow-lg overflow-hidden">
      <div className="w-500 overflow-auto">{accounts}</div>
      <AccountView {...props} />
    </div>
  );
};
export default index;
