import Link from "next/link";

const vancoastLogo = props => {
  return (
    <div className="vcNavSection-one flex justify-center items-center">
      <Link href="/">
        <a aria-label="nav-logo" className="vcNav-logo">
          <img
            src="../static/img/assets/vancoast-bar-logo.png"
            alt="vancoast industries"
          />
        </a>
      </Link>
      <Link href="/">
        <a
          aria-label="nav-logo-mobile"
          className="vcNav-vLogo xl:hidden xxl:hidden"
        >
          <img src="../static/img/assets/vancoast-v-logo.png" alt="" />
        </a>
      </Link>
    </div>
  );
};

export default vancoastLogo;
