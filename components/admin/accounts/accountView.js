import moment from "moment";

const index = props => {
  let currentAccount = props.admin.currentAccount;
  if (!currentAccount) return null;
  let status = props.admin.statuses[currentAccount.approved];
  let actions = [
    { label: "ban", color: "red", pos: 3 },
    { label: "decline", color: "black", pos: 2 },
    { label: "approve", color: "green", pos: 1 }
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
          className={`rounded text-white text-base font-bold w-32 text-center py-2 uppercase hover:bg-grey-light hover:text-grey cursor-pointer bg-${
            action.color
          }`}
        >
          {action.label}
        </span>
      );
    });
  return (
    <div className="w-full p-3">
      <p className="uppercase text-2xl text-blue-lighter font-bold w-full text-center border-b-2 border-grey-lighter pb-4">
        Profile Manager
      </p>
      <div className="inline-flex w-full">
        <div className="w-600 p-8">
          {/* <div className="inline-flex w-full">
          <div className="py-4 mx-2 w-1/2">
            <p className="uppercase text-xs font-bold">Name:</p>
            <h3 className="uppercase text-grey-dark text-lg">
              {currentAccount.name}Test
            </h3>
          </div>
          <div className="py-4 mx-2 w-1/2">
            <p className="uppercase text-xs font-bold">Company:</p>
            <h3 className="uppercase text-grey-dark text-lg">
              {currentAccount.company}
            </h3>
          </div>
        </div> */}

          <div className="px-2 w-400">
            <p className="w-full max-w-400 text-base my-3 flex justify-between">
              <span className="mr-2 uppercase font-bold text-grey-dark">
                Name:
              </span>
              <span className="lowercase">{currentAccount.name}</span>
            </p>
            <p className="w-full max-w-400 text-base my-3 flex justify-between">
              <span className="mr-2 uppercase font-bold text-grey-dark">
                Company:
              </span>
              <span className="lowercase">{currentAccount.company}</span>
            </p>
            <p className="w-full max-w-400 text-base my-3 flex justify-between">
              <span className="mr-2 uppercase font-bold text-grey-dark">
                Email:
              </span>
              <span className="lowercase">{currentAccount.email}</span>
            </p>
            <p className="w-full max-w-400 text-base my-3 flex justify-between">
              <span className="uppercase mr-2 font-bold text-grey-dark">
                Phone:
              </span>
              <span>{currentAccount.phone}</span>
            </p>
            <p className="w-full max-w-400 text-base my-3 flex justify-between">
              <span className="uppercase mr-2 font-bold text-grey-dark">
                Website:
              </span>
              <span>{currentAccount.website}</span>
            </p>
            <p className="w-full max-w-400 text-base my-3 flex justify-between">
              <span className="uppercase mr-2 font-bold text-grey-dark">
                License:
              </span>
              <span>{currentAccount.license}</span>
            </p>
            <p className="w-full max-w-400 text-base my-3 flex justify-between">
              <span className="uppercase mr-2 font-bold text-grey-dark">
                Status:
              </span>
              <span className={`uppercase text-${status.color}`}>
                {status.label}
              </span>
            </p>
            <p className="w-full max-w-400 text-base my-3 flex justify-between">
              <span className="uppercase mr-2 font-bold text-grey-dark">
                Date created:
              </span>
              <span>{moment(Date.now()).format("ll")}</span>
            </p>
          </div>
          <p className="w-full max-w-400 text-lg my-3 flex flex-wrap justify-between">
            <span className="w-full text-base text-center mt-3 uppercase font-bold bg-grey-light text-grey p-1">
              Actions:
            </span>
            <textarea
              style={{ resize: "none" }}
              onChange={e => {
                props.handleStatusChangeNote(e.target.value);
              }}
              className="w-full text-base border rounded my-3 p-2 h-32"
              placeholder="Additional Note/Reason (not required):"
              type="text"
            />
            {actions}
          </p>
        </div>
        <div className="w-full mt-10 border-l-2 border-grey-lighter pl-4">
          <div className="w-full text-base h-250">
            <p className="uppercase w-full mr-2 my-1 font-bold text-grey-dark">
              Description:
            </p>
            <p className="w-full">{currentAccount.description}</p>
          </div>
          <div className="w-full text-base h-250">
            <p className="uppercase w-full mr-2 my-1 font-bold text-grey-dark">
              Orders:
            </p>
            <div className="inline-flex w-full my-1 bg-grey-lighter p-1">
              <div className="w-1/3">
                <p className="w-full">Order #21-35467</p>
              </div>
              <div className="w-1/3">
                <p className="w-full">$560.00</p>
              </div>
              <div className="w-1/3">
                <p className="w-full">May 23, 2019</p>
              </div>
            </div>
            <div className="inline-flex w-full my-1 bg-white p-1">
              <div className="w-1/3">
                <p className="w-full">Order #21-35467</p>
              </div>
              <div className="w-1/3">
                <p className="w-full">$560.00</p>
              </div>
              <div className="w-1/3">
                <p className="w-full">May 23, 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;
