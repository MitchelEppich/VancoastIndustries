const index = props => {
  let filterOptions = ["pending", "approved", "declined", "banned"].map(
    (status, index) => {
      let border = index == 3 ? "rounded-bl-full rounded-br-full" : "";
      return (
        <option className={`${border} bg-blue`} value={index}>
          {status}
        </option>
      );
    }
  );
  return (
    <div className="w-1/2 flex justify-end">
      <select
        className="w-64 h-10 bg-transparent border border-white text-white rounded-lg uppercase px-4"
        onChange={e => {}}
        name="filterOptions"
        id="filterOptions"
      >
        <option
          className="rounded-tl-full rounded-tr-full bg-blue"
          value={index}
        >
          Filter by...
        </option>
        {filterOptions}
      </select>
    </div>
  );
};

export default index;
