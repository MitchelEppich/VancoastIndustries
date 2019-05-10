const index = props => {
  let currentAccount = props.admin.currentAccount;
  return (
    <div className="flex flex-wrap content-start p-12">
      <p className="w-full text-xl my-3">
        <span className="capitalize mr-2">name:</span>
        <span>{currentAccount.name}</span>
      </p>
      <p className="w-full text-xl my-3">
        <span className="capitalize mr-2">company:</span>
        <span>{currentAccount.company}</span>
      </p>
      <p className="w-full text-xl my-3">
        <span className="capitalize mr-2">email:</span>
        <span>{currentAccount.email}</span>
      </p>
      <p className="w-full text-xl my-3">
        <span className="capitalize mr-2">phone:</span>
        <span>{currentAccount.phone}</span>
      </p>
      <p className="w-full text-xl my-3">
        <span className="capitalize mr-2">website:</span>
        <span>{currentAccount.website}</span>
      </p>
      <p className="w-full text-xl my-3">
        <span className="capitalize mr-2">license:</span>
        <span>{currentAccount.license}</span>
      </p>
      <p className="w-full text-xl my-3">
        <span className="capitalize mr-2">status:</span>
        <span>{currentAccount.approved}</span>
      </p>
      <p className="w-full text-xl my-3">
        <span className="capitalize mr-2">date created:</span>
        <span>{currentAccount.createdAt.type}</span>
      </p>
      <p className="w-full text-xl my-3">Actions:</p>
    </div>
  );
};
export default index;
