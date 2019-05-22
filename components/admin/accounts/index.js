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
    <div className="w-full mt-12 h-700 flex inline-flex bg-white shadow-super overflow-hidden max-w-adminPanel mx-auto">
      <div className="w-1/4 shadow-md">
        <div className="text-white uppercase font-bold bg-blue-purple w-full py-7 h-12 flex items-center text-xl inline-flex relative">
          <div className="w-full text-center">User List</div>
          <div className="w-1/5 absolute pin-r">
            <Sort {...props} />
          </div>
        </div>
        <Search {...props} />

        <div className="relative">
          <div className="w-full inline-flex absolute pin-t bg-grey-dark text-white p-1 border-t-2 border-grey-light text-sm font-bold">
            <div className="w-3/5 text-left pl-6 uppercase">Company</div>
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
