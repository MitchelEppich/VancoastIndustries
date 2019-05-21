import Accounts from "./accounts";
import Search from "./search";
import Filters from "./sort";

const index = props => {
  let user = props.account.currentUser;
  let name = "Vanessa";

  return (
    <div className="vcAdminAccount flex flex-wrap justify-between content-start  ">
      <div className="w-full flex justify-between items-center px-24 py-4 bg-blue shadow">
        <h2 className="w-48 text-white font-thin text-lg ml-4">
          Welcome {name}!
        </h2>
        <img
          src="../static/img/assets/vc-full-logo.png"
          alt="vancoast industries"
          className="w-100"
        />
        <div className="w-48 text-right">
          <button className="bg-white text-blue hover:bg-semi-transparent px-4 py-2 scale-item">
            Logout
          </button>
        </div>
      </div>
      <div className="px-24 w-full">
        <Accounts {...props} />
      </div>
    </div>
  );
};

export default index;
