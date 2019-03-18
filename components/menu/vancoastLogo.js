import Link from "next/link";

const vancoastLogo = props => {
  return (
    <div className="vcNavSection-one flex justify-center items-center scale-item">
      <Link href="/">
        <a className="vcNav-logo">
          <img
            src="../static/img/assets/vancoast-bar-logo.png"
            alt="vancoast industries"
          />
        </a>
      </Link>
      <Link href="/">
        <a className="vcNav-vLogo">
          <img src="../static/img/assets/vancoast-v-logo.png" alt="" />
        </a>
      </Link>
    </div>
  );
};

export default vancoastLogo;
