const index = props => {
  return (
    <input
      onChange={e => props.searchAccounts(e.target.value)}
      placeholder="Search..."
      className="text-blue text-lg pl-5 border border-grey-light border-t-0 border-l-0 border-r-0  bg-transparent w-full h-12 capitalize"
    />
  );
};
export default index;
