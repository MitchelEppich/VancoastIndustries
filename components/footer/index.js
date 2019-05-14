import Link from "next/link";

const footer = props => {
  return (
    <footer className="flex flex-col justify-around">
      {/* <div className="footer-overlay"> */}
      <div className="vcSubscribe-box-wrap flex justify-end md:pr-12 lg:pr-12 pt-16 pb-10 sm:pb-4 xxl:px-32 xl:px-32">
        <div className="vcSubscribe-box">
          <h3 className="mb-4">
            <span className="vcSubscribe-van">Vancoast</span>{" "}
            <span className="vcSubscribe-news">Newsletter</span>
          </h3>
          <form action="/action_page.php">
            <input
              aria-label="newsletter-subscription"
              className="vcNewsletter-input"
              type="text"
              placeholder="Enter your email..."
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
          <a aria-label="logo-footer" className="vcFooter-logo sm:w-250">
            <img src="../static/img/assets/vcText-logo.png" alt="" />
          </a>
        </Link>
      </div>

      <div className="vcFooter-menu-wrap flex justify-center py-8">
        <nav className="vcFooter-menu">
          <ul className="flex sm:flex-col md:flex-col flex-row justify-around items-center">
            <li className="flex scale-item text-center">
              <Link prefetch href="/contact">
                <a aria-label="contact">Contact</a>
              </Link>
            </li>
            <li className="flex scale-item text-center">
              <Link prefetch href="/about">
                <a aria-label="about">About</a>
              </Link>
            </li>
            <li className="flex scale-item text-center">
              <Link prefetch href="/privacy-policy">
                <a aria-label="privacy-policy">Privacy Policy</a>
              </Link>
            </li>
            <li className="flex scale-item text-center">
              <Link prefetch href="/faq">
                <a aria-label="faq">FAQ</a>
              </Link>
            </li>
            <li className="flex scale-item text-center">
              <Link prefetch href="/wholesale-application">
                <a aria-label="wholesale-application">Wholesale Application</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="vcFooter-copy-wrap py-4 flex justify-center">
        <p className="vcFooter-copy">&copy; 2019 Vancoast Industries</p>
      </div>
      {/* </div> */}
    </footer>
  );
};
export default footer;
