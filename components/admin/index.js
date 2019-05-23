import Accounts from "./accounts";
import Search from "./search";
import Filters from "./sort";
import Router from "next/router";

const index = props => {
  let user = props.account.currentUser;
  console.log(user);
  let name = user ? user.email : "";
  let company = user ? user.company : "";

  return (
    <div className="vcAdminAccount flex flex-wrap justify-between content-start  ">
      <div className="w-full flex justify-between items-center px-32 py-4 ">
        <div className="w-2/5">
          <h2 className="text-white font-bold text-lg ml-4 capitalize">
            Welcome {company}!
          </h2>
        </div>
        <div className="w-1/5 text-center">
          <img
            src="../static/img/assets/vc-full-logo.png"
            alt="vancoast industries"
            className="w-100"
          />
        </div>
        <div className="w-2/5 inline-flex flex justify-end">
          <button
            // key={index}
            onClick={() => {
              Router.push("/shop");
            }}
            className="bg-white mx-2 text-blue hover:bg-semi-transparent px-4 py-2 scale-item"
          >
            Return to website
          </button>
          <button
            key={index}
            onClick={() => {
              Router.push("/shop");
              props.logout();
            }}
            className="bg-white mx-2 text-blue hover:bg-semi-transparent px-4 py-2 scale-item"
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
