import Link from "next/link";

const previewStrains = props => {
  return (
    <React.Fragment>
      <h2>
        <span className="vcShop-shop">Shop</span>{" "}
        <span className="vcShop-strains">Cannabis Strains</span>
      </h2>
      <div className="vcShop-bg">
        <div className="vcShop-wrap flex justify-center">
          <div className="vcShop-box flex justify-center items-center">
            <img
              src="../static/img/products/sonoma/so-auto-critical.jpg"
              alt=""
            />
          </div>
          <div className="vcShop-box flex justify-center items-center">
            <img src="../static/img/products/sonoma/so-blueberry.jpg" alt="" />
          </div>
          <div className="vcShop-box flex justify-center items-center">
            <img
              src="../static/img/products/sunwest/sw-jack-herer.png"
              alt=""
            />
          </div>
          <div className="vcShop-box flex justify-center items-center">
            <img
              src="../static/img/products/sunwest/sw-girl-scout-cookies.png"
              alt=""
            />
          </div>
          <div className="vcShop-box flex justify-center items-center">
            <img src="../static/img/products/sonoma/so-ak47.jpg" alt="" />
          </div>
          <div className="vcShop-box flex justify-center items-center">
            <img src="../static/img/products/cks/cks-afghani.png" alt="" />
          </div>
          <div className="vcShop-box flex justify-center items-center">
            <img src="../static/img/products/cks/cks-dwarf.png" alt="" />
          </div>
          <div className="vcShop-box flex justify-center items-center">
            <img
              src="../static/img/products/sonoma/so-bruce-banner.jpg"
              alt=""
            />
          </div>
          <div className="vcShop-box flex justify-center items-center">
            <img src="../static/img/products/cks/cks-sativa-star.png" alt="" />
          </div>
          <div className="vcShop-box flex justify-center items-center">
            <img src="../static/img/products/sonoma/so-bubblegum.jpg" alt="" />
          </div>
          <div className="vcShop-box flex justify-center items-center">
            <img
              src="../static/img/products/sunwest/sw-blue-dream.png"
              alt=""
            />
          </div>
          <div className="vcShop-box flex justify-center items-center">
            <img
              src="../static/img/products/sunwest/sw-purple-kush.png"
              alt=""
            />
          </div>
          <div className="vcShop-box flex justify-center items-center">
            <img
              src="../static/img/products/sonoma/so-strawberry-cough.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="vcShop-btns flex flex-row justify-center">
          <Link prefetch href="/shop">
            <button className="vcShop-all">View All</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
export default previewStrains;
