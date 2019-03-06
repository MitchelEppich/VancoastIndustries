import Link from "next/link";

const ourBrands = props => {
  return (
    <div className="vcBrand-section container-col items-center">
      <div className="vcBrand-text flex flex-col items-center">
        <h3>Cannabis Brands</h3>
        <h2>Our Companies</h2>
        <p>Only the best cannabis seeds in the world</p>
      </div>

      <div className="vcBrand-slider flex flex-row justify-around items-center">
        <div className="vcSlide-one flex">
          <Link prefetch href="/shop">
            <a>
              <img
                src="../static/img/assets/sonoma-logo.png"
                alt="sonoma seeds brand"
              />
            </a>
          </Link>
        </div>
        <div className="vcSlide-two flex">
          <Link prefetch href="/shop">
            <a>
              <img
                src="../static/img/assets/sunwest-logo.png"
                alt="sunwest brand card"
              />
            </a>
          </Link>
        </div>
        <div className="vcSlide-three flex">
          <Link prefetch href="/shop">
            <a>
              <img
                src="../static/img/assets/cks-logo.png"
                alt="cks brand card"
              />
            </a>
          </Link>
        </div>
      </div>

      <div className="vcBrand-dir" />
      <a href="" />
      <a href="" />
    </div>
  );
};

export default ourBrands;
