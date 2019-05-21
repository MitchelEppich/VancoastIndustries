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
      <div className="w-1/4 shadow-md">
        <div className="text-white uppercase font-bold bg-blue-lighter w-full h-12 flex justify-center items-center text-xl">
          All Users
        </div>
        <Search {...props} />
        <Sort {...props} />

        <div className="relative">
          <div className="w-full inline-flex absolute pin-t bg-blue-lighter text-white p-1 shadow text-sm font-bold">
            <div className="w-3/5 text-center uppercase">Name</div>
            <div className="w-2/5 text-center uppercase">Status</div>
          </div>
          <div className="overflow-y-auto pt-4 h-550">{sortedAccounts}</div>
        </div>
      </div>
      <div className="w-3/4">
        <AccountView {...props} />
      </div>
    </div>
  );
};
export default index;
