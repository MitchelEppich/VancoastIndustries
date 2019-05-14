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
    <div className="w-full h-700 rounded-lg flex flex-wrap bg-white shadow-lg overflow-hidden">
      <div className="w-300">
        <Search {...props} />
        <Sort {...props} />
        {sortedAccounts}
      </div>
      <AccountView {...props} />
    </div>
  );
};
export default index;
