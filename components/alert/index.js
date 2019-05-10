import Router from "next/router";

const index = props => {
  return (
    <div
      style={{ transform: "translateX(calc(50vw - 150px))" }}
      className="bg-white border border-blue w-300 h-200 mt-32 mx-auto fixed z-50 rounded-lg shadow-lg text-blue"
    >
      {props.misc.alert.message}
      <button onClick={() => props.misc.alert.fire} className="p-3 px-4">
        {props.misc.alert.actionName}
      </button>
    </div>
  );
};

export default index;
