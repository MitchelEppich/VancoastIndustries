import Accounts from "./accounts";
import Search from "./search";
import Filters from "./sort";

const index = props => {
  let user = props.account.currentUser;
  console.log(user);
  let name = user ? user.email : "";
  let company = user ? user.company : "";

  return (
    <div className="vcAdminAccount flex flex-wrap justify-between content-start  ">
      <div className="w-full flex justify-between items-center px-32 py-4 bg-blue shadow">
        <h2 className="text-white font-bold text-lg ml-4 capitalize">
          Welcome {company}!
        </h2>
        <img
          src="../static/img/assets/vc-full-logo.png"
          alt="vancoast industries"
          className="w-100"
        />
        <div className="w-48 text-right">
          <button
            key={index}
            onClick={() => {
              Router.push("/shop");
              props.logout();
            }}
            className="bg-white text-blue hover:bg-semi-transparent px-4 py-2 scale-item"
          >
            Log out
          </button>
        </div>
      </div>
      <div className="px-24 w-full flex justify-center">
        <Accounts {...props} />
      </div>
    </div>
  );
};

export default index;
