import Link from "next/link";

const sessionDetails = props => {
  return (
    <div className="vcNavSection-three flex justify-center items-center">
      <button className="vcNav-login">Login</button>

      <div className="vcWelcome flex flex-col justify-center items-center scale-item">
        <Link href="/account">
          <a className="flex flex-col items-center justify-center">
            <img
              className="flex"
              src="../static/img/assets/icons/user-icon.svg"
              alt=""
            />
            <span className="flex">Welcome, Steve</span>
          </a>
        </Link>
      </div>

      <div
        onClick={() => props.toggleCart(!props.misc.showCart)}
        className="vcNav-cart scale-item"
      >
        <img src="../static/img/assets/icons/box-icon.svg" alt="" />
        <span className="vcNav-cartCount">
          {Object.keys(props.checkout.cart.items).length}
        </span>
      </div>
    </div>
  );
};
export default sessionDetails;