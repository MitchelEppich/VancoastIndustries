const menu = props => {
  let options = props.account.options.map((option, index) => {
    return (
      <button
        key={index}
        onClick={() => props.changeOption(index)}
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
  return (
    <div className="vcAccount-tabs">
      {/* <button className="tablink" id="defaultOpen">
                Account Info
            </button> */}
      {options}
    </div>
  );
};
export default menu;
