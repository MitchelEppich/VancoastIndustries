import Accounts from "./accounts";
import Search from "./search";
import Filters from "./filters";

const index = props => {
  let user = props.account.currentUser;
  let name = user.company;

  return (
    <div className="vcAdminAccount flex flex-wrap justify-between content-start py-4 px-24">
      <div className="w-full flex justify-between items-center">
        <h2 className="w-48 text-white font-thin">Hi {name}</h2>
        <img
          src="../static/img/assets/vc-full-logo.png"
          alt="vancoast industries"
          className="w-24 h-16"
        />
        <div className="w-48 text-right">
          <button className="bg-white text-blue px-4 py-2">Logout</button>
        </div>
      </div>
      <div className="w-full flex my-2">
        <Search {...props} />
        <Filters {...props} />
      </div>
      <Accounts {...props} />
    </div>
  );
};

export default index;
