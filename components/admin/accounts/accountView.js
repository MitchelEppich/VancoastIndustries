import moment from "moment";

const index = props => {
  let currentAccount = props.admin.currentAccount;
  if (!currentAccount) return null;
  let status = props.admin.statuses[currentAccount.approved];
  let actions = [
    { label: "approve", color: "green", pos: 1 },
    { label: "decline", color: "orange", pos: 2 },
    { label: "ban", color: "red", pos: 3 }
  ]
    .filter(action => {
      switch (currentAccount.approved) {
        case 0:
          return true;
        case 1:
          return action.label == "ban" || action.label == "decline";
        case 2:
          return action.label == "approve" || action.label == "ban";
        case 3:
          return action.label == "approve";
      }
    })
    .map((action, index) => {
      return (
        <span
          key={index}
          onClick={() => {
            props.changeAccountStatus({
              account: currentAccount,
              accounts: props.admin.accounts,
              status: action.pos,
              note: props.admin.statusNote
            });
          }}
          className={`rounded-lg text-white w-32 text-center py-2 uppercase cursor-pointer bg-${
            action.color
          }`}
        >
          {action.label}
        </span>
      );
    });
  return (
    <div className="w-500 p-12">
      <p className="w-full max-w-500 text-xl my-3 flex justify-between">
        <span className="capitalize mr-2">name:</span>
        <span>{currentAccount.name}</span>
      </p>
      <p className="w-full max-w-500 text-xl my-3 flex justify-between">
        <span className="capitalize mr-2">company:</span>
        <span>{currentAccount.company}</span>
      </p>
      <p className="w-full max-w-500 text-xl my-3 flex justify-between">
        <span className="capitalize mr-2">email:</span>
        <span>{currentAccount.email}</span>
      </p>
      <p className="w-full max-w-500 text-xl my-3 flex justify-between">
        <span className="capitalize mr-2">phone:</span>
        <span>{currentAccount.phone}</span>
      </p>
      <p className="w-full max-w-500 text-xl my-3 flex justify-between">
        <span className="capitalize mr-2">website:</span>
        <span>{currentAccount.website}</span>
      </p>
      <p className="w-full max-w-500 text-xl my-3 flex justify-between">
        <span className="capitalize mr-2">license:</span>
        <span>{currentAccount.license}</span>
      </p>
      <p className="w-full max-w-500 text-xl my-3 flex justify-between">
        <span className="capitalize mr-2">status:</span>
        <span className={`uppercase text-${status.color}`}>{status.label}</span>
      </p>
      <p className="w-full max-w-500 text-xl my-3 flex justify-between">
        <span className="capitalize mr-2">date created:</span>
        <span>{moment(Date.now()).format("MMM Do YYYY")}</span>
      </p>
      <p className="border-t-1 border-grey-light border border-l-0 border-r-0 border-b-0 w-full max-w-500 text-xl my-3 flex flex-wrap justify-between">
        <span className="w-full mt-3">Actions:</span>
        <textarea
          style={{ resize: "none" }}
          onChange={e => {
            props.handleStatusChangeNote(e.target.value);
          }}
          className="w-full shadow border rounded-lg my-3 p-2 h-32"
          placeholder="Note/Reason (not required):"
          type="text"
        />
        {actions}
      </p>
    </div>
  );
};
export default index;
