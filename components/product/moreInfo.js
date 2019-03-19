const MoreInfo = props => {
  return (
    <div className="w-full">
      <div className="text-center">
        <h3 className="vcCompany-similar text-xl font-bold">
          More Information about {props.product.currentProduct.name}
        </h3>
      </div>
      <div className="w-full mx-auto mt-8">
        <div className="w-400 mx-auto">
          <div className="inline-flex w-full">
            <div className="w-1/2">
              <p>Average Yield:</p>
            </div>
            <div className="w-1/2 text-left">
              <p>{props.product.currentProduct.avgYield}g</p>
            </div>
          </div>
          <div className="inline-flex w-full">
            <div className="w-1/2">
              <p>Country:</p>
            </div>
            <div className="w-1/2 text-left">
              <p>{props.product.currentProduct.country}</p>
            </div>
          </div>
          <div className="inline-flex w-full">
            <div className="w-1/2">
              <p>Difficulty:</p>
            </div>
            <div className="w-1/2 text-left">
              <p>{props.product.currentProduct.difficulty}</p>
            </div>
          </div>
          <div className="inline-flex w-full">
            <div className="w-1/2">
              <p>Effect:</p>
            </div>
            <div className="w-1/2 text-left">
              <p>{props.product.currentProduct.effect}</p>
            </div>
          </div>
          <div className="inline-flex w-full">
            <div className="w-1/2">
              <p>Environment:</p>
            </div>
            <div className="w-1/2 text-left">
              <p>{props.product.currentProduct.environment}</p>
            </div>
          </div>
          <div className="inline-flex w-full">
            <div className="w-1/2">
              <p>Flower Time:</p>
            </div>
            <div className="w-1/2 text-left">
              <p>
                {console.log(props.product)}
                {props.product.currentProduct != null ||
                props.product.currentProduct.flowerTime.length > 2 ? (
                  <span>
                    {props.product.currentProduct.flowerTime[0]} to{" "}
                    {props.product.currentProduct.flowerTime[1]} Weeks
                  </span>
                ) : (
                  <span>
                    {props.product.currentProduct.flowerTime[0]} Weeks{" "}
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="inline-flex w-full">
            <div className="w-1/2">
              <p>Genetic:</p>
            </div>
            <div className="w-1/2 text-left">
              <p>{props.product.currentProduct.genetic}</p>
            </div>
          </div>
          <div className="inline-flex w-full">
            <div className="w-1/2">
              <p>Indica:</p>
            </div>
            <div className="w-1/2 text-left">
              <p>{props.product.currentProduct.indica * 100}%</p>
            </div>
          </div>
          {props.product.currentProduct.ruderalis ? (
            <div className="inline-flex w-full">
              <div className="w-1/2">
                <p>Ruderalis:</p>
              </div>
              <div className="w-1/2 text-left">
                <p>{props.product.currentProduct.ruderalis * 100}%</p>
              </div>
            </div>
          ) : null}
          <div className="inline-flex w-full">
            <div className="w-1/2">
              <p>Sativa:</p>
            </div>
            <div className="w-1/2 text-left">
              <p>{props.product.currentProduct.sativa * 100}%</p>
            </div>
          </div>
          <div className="inline-flex w-full">
            <div className="w-1/2">
              <p>CBD %:</p>
            </div>
            <div className="w-1/2 text-left">
              <p>{props.product.currentProduct.pCbd}</p>
            </div>
          </div>
          <div className="inline-flex w-full">
            <div className="w-1/2">
              <p>CNB %:</p>
            </div>
            <div className="w-1/2 text-left">
              <p>{props.product.currentProduct.pCbn}</p>
            </div>
          </div>
          <div className="inline-flex w-full">
            <div className="w-1/2">
              <p>THC %:</p>
            </div>
            <div className="w-1/2 text-left">
              <p>{props.product.currentProduct.pThc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
