import Link from "next/link";

const sessionDetails = props => {
  return (
    <div className="vcNavSection-three flex justify-center items-center">
      <button className="vcNav-login">Login</button>

      <div className="vcWelcome flex flex-col justify-center items-center scale-item">
        {props.account.currentUser != null &&
        props.account.currentUser.error == null ? (
          <Link href="/account">
            <a className="flex flex-col items-center justify-center text-center">
              <img
                className="text-center w-full"
                src="../static/img/assets/icons/user-icon.svg"
                alt=""
              />
              <span className="text-center">
                Welcome, {props.account.currentUser.name}
              </span>
            </a>
          </Link>
        ) : (
          <Link href="/login">
            <a className="flex flex-col items-center justify-center">
              <span className="border border-blue rounded-lg p-2 px-4 uppercase">
                Login
              </span>
            </a>
          </Link>
        )}
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
