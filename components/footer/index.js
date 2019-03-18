import Link from "next/link";

const footer = props => {
  return (
    <footer className="flex flex-col justify-around">
      <div className="vcSubscribe-box-wrap flex justify-end">
        <div className="vcSubscribe-box">
          <h3>
            <span className="vcSubscribe-van">Vancoast</span>{" "}
            <span className="vcSubscribe-news">Newsletter</span>
          </h3>
          <form action="/action_page.php">
            <input
              className="vcNewsletter-input"
              type="text"
              placeholder="email"
            />
            <input
              className="vcNewsletter-btn"
              type="submit"
              value="Subscribe"
            />
          </form>
        </div>
      </div>

      <div className="vcFooter-logo-wrap flex justify-center">
        <Link prefetch href="/">
          <a className="vcFooter-logo">
            <img src="../static/img/assets/vcText-logo.png" alt="" />
          </a>
        </Link>
      </div>

      <div className="vcFooter-menu-wrap flex">
        <nav className="vcFooter-menu">
          <ul className="flex flex-col lg:flex-row justify-around items-center">
            <li className="flex">
              <Link prefetch href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li className="flex">
              <Link prefetch href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="flex">
              <Link prefetch href="/privacy-policy">
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li className="flex">
              <Link prefetch href="/faq">
                <a>FAQ</a>
              </Link>
            </li>
            <li className="flex">
              <Link prefetch href="/wholesale-application">
                <a>Wholesale Application</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="vcFooter-copy-wrap pt-10 flex justify-center">
        <p className="vcFooter-copy">&copy; 2019 VanCoast Industries</p>
      </div>
    </footer>
  );
};
export default footer;
