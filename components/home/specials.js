const specials = props => {
  return (
    <div className="vcSpecials-section flex flex-col justify-center items-center">
      <h2 className="flex flex-col justify-center">
        <span>Limited Time</span> Specials
      </h2>

      <div className="vcSpecials-wrap flex flex-row sm:flex-col md:flex-col justify-around items-center">
        <div className="vcSpecials-product scale-item">
          <div className="vcSpecials-img">
            <a href="">
              <img
                src="../static/img/products/sonoma/so-northern-berry.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="vcSpecials-info">
            <h3>Northern Berry</h3>
            <p className="vcSpecials-price">
              from <span>$135</span>
            </p>
            <p className="vcSpecials-cat">INDICA</p>
          </div>
        </div>

        <div className="vcSpecials-product scale-item">
          <div className="vcSpecials-img">
            <a href="">
              <img
                src="../static/img/products/sunwest/sw-purple-kush.png"
                alt=""
              />
            </a>
          </div>
          <div className="vcSpecials-info">
            <h3>Purple Kush</h3>
            <p className="vcSpecials-price">
              from <span>$55</span>
            </p>
            <p className="vcSpecials-cat">INDICA</p>
          </div>
        </div>

        <div className="vcSpecials-product scale-item">
          <div className="vcSpecials-img">
            <a href="">
              <img
                src="../static/img/products/cks/cks-lambs-breath.png"
                alt=""
              />
            </a>
          </div>
          <div className="vcSpecials-info">
            <h3>Lambs Breath</h3>
            <p className="vcSpecials-price">
              from <span>$35</span>
            </p>
            <p className="vcSpecials-cat">SATIVA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default specials;
