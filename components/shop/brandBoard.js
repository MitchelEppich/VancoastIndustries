import Link from "next/link";

const brandBoard = props => {
  return (
    <div
      className={
        "vcBrand-board  " +
        props.class +
        " flex flex-row sm:flex-col justify-between items-center"
      }
    >
      <img src={props.logo} alt={props.name} />
      <p>{props.description}</p>
      <Link
        prefetch
        href="/shop"
        as={"/shop/" + props.name.replace(/ /g, "").toLowerCase()}
      >
        <button
          className="text-blue hover:text-white slowish"
          onClick={() => {
            props.setBrandIndex(props.brandIndex);
            window.scrollTo(0, 0);
          }}
        >
          {props.name}
        </button>
      </Link>
    </div>
  );
};
export default brandBoard;
