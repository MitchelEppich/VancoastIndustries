const similarSeeds = props => {
  return (
    <div className="vcWholesale-content">
      <h3 className="vcCompany-similar">Similar Seeds by Sonoma</h3>
      <ul className="vcProduct-list flex flex-row justify-center items-baseline">
        <li className="vcProduct-item flex">
          <article>
            <a href="">
              <img
                src="../static/img/products/sonoma/so-northern-berry.jpg"
                alt=""
              />
            </a>
            <header className="vcProduct-info flex flex-col">
              <h2>
                <a href="">Northern Berry</a>
              </h2>
              <div className="vcProduct-info flex flex-row justify-between">
                <h3 className="vcProduct-cat">Indica</h3>
                <p className="vcProduct-price">from $25</p>
              </div>
            </header>
          </article>
        </li>

        <li className="vcProduct-item flex">
          <article>
            <a href="">
              <img
                src="../static/img/products/sonoma/so-cali-kush.jpg"
                alt=""
              />
            </a>
            <header className="vcProduct-info flex flex-col">
              <h2>
                <a href="">Cali Kush</a>
              </h2>
              <div className="vcProduct-info flex flex-row justify-between">
                <h3 className="vcProduct-cat">Indica</h3>
                <p className="vcProduct-price">from $25</p>
              </div>
            </header>
          </article>
          <a href="">
            <img
              className="quick-view"
              title="quick view"
              src="../static/img/assets/icons/quick-view.svg"
              alt="quick view"
            />
          </a>
        </li>

        <li className="vcProduct-item flex">
          <article>
            <a href="">
              <img
                src="../static/img/products/sonoma/so-blueberry.jpg"
                alt=""
              />
            </a>
            <header className="vcProduct-info flex flex-col">
              <h2>
                <a href="">BlueBerry</a>
              </h2>
              <div className="vcProduct-info flex flex-row justify-between">
                <h3 className="vcProduct-cat">Indica</h3>
                <p className="vcProduct-price">from $25</p>
              </div>
            </header>
          </article>
        </li>
      </ul>

      <h3 className="vcCompany-similar">
        Similar Seeds by Sunwest Genetics
            </h3>
      <ul className="vcProduct-list flex flex-row justify-center items-baseline">
        <li className="vcProduct-item flex">
          <article>
            <a href="">
              <img
                src="../static/img/products/sunwest/sw-girl-scout-cookies.png"
                alt=""
              />
            </a>
            <header className="vcProduct-info flex flex-col">
              <h2>
                <a href="">Girl Scout Cookies</a>
              </h2>
              <div className="vcProduct-info flex flex-row justify-between">
                <h3 className="vcProduct-cat">Indica</h3>
                <p className="vcProduct-price">from $25</p>
              </div>
            </header>
          </article>
        </li>

        <li className="vcProduct-item flex">
          <article>
            <a href="">
              <img
                src="../static/img/products/sunwest/sw-bubblegum.png"
                alt=""
              />
            </a>
            <header className="vcProduct-info flex flex-col">
              <h2>
                <a href="">Bubblegum</a>
              </h2>
              <div className="vcProduct-info flex flex-row justify-between">
                <h3 className="vcProduct-cat">Indica</h3>
                <p className="vcProduct-price">from $25</p>
              </div>
            </header>
          </article>
        </li>

        <li className="vcProduct-item flex">
          <article>
            <a href="">
              <img
                src="../static/img/products/sunwest/sw-chemdog.png"
                alt=""
              />
            </a>
            <header className="vcProduct-info flex flex-col">
              <h2>
                <a href="">Chemdog</a>
              </h2>
              <div className="vcProduct-info flex flex-row justify-between">
                <h3 className="vcProduct-cat">Indica</h3>
                <p className="vcProduct-price">from $25</p>
              </div>
            </header>
          </article>
        </li>
      </ul>
    </div>
  );
};

export default similarSeeds;
