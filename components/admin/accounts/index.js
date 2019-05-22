import AccountListing from "./accountListing";
import AccountView from "./accountView";
import Search from "../search";
import Sort from "../sort";

const index = props => {
  let accounts = [],
    sortedAccounts = [];
  for (let account of props.admin.accounts) {
    if (account.approved == props.admin.sortByIndex) {
      sortedAccounts.push(account);
    } else {
      accounts.push(account);
    }
  }
  sortedAccounts = [...sortedAccounts, ...accounts];
  sortedAccounts = sortedAccounts
    .filter(account => {
      if (props.admin.searchTerm == "" || props.admin.searchTerm == null) {
        return true;
      }
      return JSON.stringify(account)
        .toLowerCase()
        .includes(props.admin.searchTerm.toLowerCase());
    })
    .map((account, index) => {
      return <AccountListing key={index} {...props} account={account} />;
    });

  return (
    <div className="w-full mt-12 h-700 rounded-lg flex inline-flex bg-white shadow-lg overflow-hidden ">
      <div className="w-1/4  border-r-4 border-white">
        <div className="text-white uppercase font-bold bg-blue-lighter w-full py-7 h-12 flex items-center text-xl inline-flex relative">
          <div className="w-full text-center">User List</div>
          <div className="w-1/5 absolute pin-r">
            <Sort {...props} />
          </div>
        </div>
        <Search {...props} />

        <div className="relative">
          <div className="w-full inline-flex absolute pin-t bg-blue-lighter text-white p-1 shadow text-sm font-bold">
            <div className="w-3/5 text-center uppercase">Company</div>
            <div className="w-2/5 text-center uppercase">Status</div>
          </div>
          <div className="overflow-y-auto pt-6 h-600">{sortedAccounts}</div>
        </div>
      </div>
      <div className="w-3/4">
        <AccountView {...props} />
      </div>
    </div>
  );
};
export default index;
