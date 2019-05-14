import Link from "next/link";

const about = props => {
  return (
    <div className="vcAbout-section flex flex-col items-center pb-12 pt-10">
      <h2 className="flex flex-col">
        <span className="vcAbout-text">About</span>
        <span className="vcAbout-van">Vancoast</span>
        <span className="vcAbout-ind">Industries</span>
      </h2>

      <p className="vcAbout-slogan">"Company Slogan Goes Here"</p>

      <div className="vcAbout-images flex justify-around items-center flex-row">
        <div className="vcAbout-imgOne">
          <img src="../static/img/assets/vc-about-fire.jpg" alt="" />
        </div>
        <div className="vcAbout-imgTwo">
          <img src="../static/img/assets/vc-about-cannabis.jpg" alt="" />
        </div>
        <div className="vcAbout-imgThree">
          <img src="../static/img/assets/vc-about-forest.jpg" alt="" />
        </div>
      </div>

      <p className="vcAbout-excerpt">
        Vancoast Industries is Canada's leading supplier of wholesale cannabis
        seeds. We aim to supply our customers with the best cannabis seed brands
        that their customers will enjoy and keep coming back for more.
      </p>

      <Link prefetch href="/about">
        <button className="hover:bg-blue-light">Read About</button>
      </Link>
    </div>
  );
};

export default about;
