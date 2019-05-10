const index = props => {
  let sortOptions = ["pending", "approved", "declined", "banned"].map(
    (status, index) => {
      let border = index == 3 ? "rounded-bl-full rounded-br-full" : "";
      return (
        <option key={index} value={index}>
          {status}
        </option>
      );
    }
  );
  return (
    <select
      className="w-full h-12 border border-white text-blue-lightest capitalize px-4"
      onChange={e => {
        props.sortAccounts(parseInt(e.target.value));
      }}
      name="sortOptions"
      id="sortOptions"
    >
      <option>Sort by...</option>
      {sortOptions}
    </select>
  );
};

export default index;
