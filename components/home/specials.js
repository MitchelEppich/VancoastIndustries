const specials = props => {
  let specials = props.shop.strains.slice(0, 3).map((strain, index) => {
    return (
      <div key={index} className="vcSpecials-product scale-item">
        <div className="vcSpecials-img">
          <a aria-label={strain.alias + "pack"} href="">
            <img
              src="../static/img/products/sonoma/so-northern-berry.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="vcSpecials-info">
          <h3>{strain.alias}</h3>
          <p className="vcSpecials-price">
            from <span>${strain.wholesale[0]}</span>
          </p>
          <p className="vcSpecials-cat">{strain.type}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="vcSpecials-section flex flex-col justify-center items-center">
      <h2 className="flex flex-col justify-center">
        <span>Limited Time</span> Specials
      </h2>

      <div className="vcSpecials-wrap flex flex-row sm:flex-col md:flex-col justify-around items-center">
        {specials}
      </div>
    </div>
  );
};

export default specials;
