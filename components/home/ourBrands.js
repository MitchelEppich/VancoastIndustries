import Link from "next/link";

const ourBrands = props => {
  return (
    <div className="vcBrand-section container-col items-center mt-12">
      <div className="vcBrand-text flex flex-col items-center">
        <h3>Cannabis Brands</h3>
        <h2>Our Companies</h2>
        <p>Only the best cannabis seeds in the world</p>
      </div>

      <div className="vcBrand-slider flex flex-row justify-around items-center">
        <div className="vcSlide-one flex">
          <Link prefetch href="/shop">
            <a
              aria-label="home-logo-sonoma"
              onClick={() => {
                props.setBrandIndex(3);
              }}
            >
              <img
                src="../static/img/assets/sonoma-logo.png"
                alt="sonoma seeds brand"
                className="company-logos"
              />
            </a>
          </Link>
        </div>
        <div className="vcSlide-two flex">
          <Link prefetch href="/shop">
            <a
              aria-label="home-logo-sunwest"
              onClick={() => {
                props.setBrandIndex(2);
              }}
            >
              <img
                src="../static/img/assets/sunwest-logo.png"
                alt="sunwest brand card"
                className="company-logos"
              />
            </a>
          </Link>
        </div>
        <div className="vcSlide-three flex">
          <Link prefetch href="/shop">
            <a
              aria-label="home-logo-cks"
              onClick={() => {
                props.setBrandIndex(1);
              }}
            >
              <img
                src="../static/img/assets/cks-logo.png"
                alt="cks brand card"
                className="company-logos"
              />
            </a>
          </Link>
        </div>
      </div>

      <div className="vcBrand-dir" />
    </div>
  );
};

export default ourBrands;
