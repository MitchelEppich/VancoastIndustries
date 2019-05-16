import Router from "next/router";
const menu = props => {
  let options = props.account.options.map((option, index) => {
    if (option == "Logout") {
      return (
        <button
          key={index}
          onClick={() => {
            Router.push("/shop");
            props.logout();
          }}
          className="tablink"
        >
          Log out
        </button>
      );
    }
    return (
      <button
        key={index}
        onClick={() => {
          props.changeOption(index);
        }}
        className={
          props.currentOptionIndex == index
            ? "tablink tablink--active"
            : "tablink"
        }
      >
        {option}
      </button>
    );
  });
  return <div className="vcAccount-tabs">{options}</div>;
};
export default menu;
