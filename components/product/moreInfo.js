const MoreInfo = props => {
  let _product = props.product.currentProduct;
  let pThc =
    _product.pThc[1] != null
      ? _product.pThc[0] + "% - " + _product.pThc[1] + "%"
      : _product.pThc + "%";
  let pCbd =
    _product.pCbd[1] != null
      ? _product.pCbd[0] + "% - " + _product.pCbd[1] + "%"
      : _product.pCbd + "%";
  let pCbn =
    _product.pCbn[1] != null
      ? _product.pCbn[0] + "% - " + _product.pCbn[1] + "%"
      : _product.pCbn + "%";
  let cbdRatioWeighting, thcRatioWeighting;
  if (_product.pCbd[0] < _product.pThc[0]) {
    cbdRatioWeighting = _product.pCbd[0] / _product.pCbd[0];
    thcRatioWeighting = _product.pThc[0] / _product.pCbd[0];
  } else {
    cbdRatioWeighting = _product.pCbd[0] / _product.pThc[0];
    thcRatioWeighting = _product.pThc[0] / _product.pThc[0];
  }
  let cbdToThc =
    Math.round(cbdRatioWeighting) + ":" + Math.round(thcRatioWeighting);
  return (
    <div className="w-full">
      <div className="text-center">
        <h3 className="vcCompany-similar text-xl font-bold">
          More Information about {_product.name}
        </h3>
      </div>
      <div className="w-full mx-auto mt-8">
        <div className="w-500 mx-auto">
          <div className="inline-flex w-full border-2 bg-grey-light border-white">
            <div className="w-1/2 px-2 p-1">
              <p>Average Yield:</p>
            </div>
            <div className="w-1/2 text-left p-1 border-l-4 border-white px-2">
              <p>{_product.avgYield}g</p>
            </div>
          </div>
          <div className="inline-flex w-full border-2 bg-grey-light border-white">
            <div className="w-1/2 px-2 p-1">
              <p>Country:</p>
            </div>
            <div className="w-1/2 text-left p-1 border-l-4 border-white px-2">
              <p>{_product.country}</p>
            </div>
          </div>
          <div className="inline-flex w-full border-2 bg-grey-light border-white">
            <div className="w-1/2 px-2 p-1">
              <p>Difficulty:</p>
            </div>
            <div className="w-1/2 text-left p-1 border-l-4 border-white px-2">
              <p>{_product.difficulty}</p>
            </div>
          </div>
          <div className="inline-flex w-full border-2 bg-grey-light border-white">
            <div className="w-1/2 px-2 p-1">
              <p>Effect:</p>
            </div>
            <div className="w-1/2 text-left p-1 border-l-4 border-white px-2">
              <p>{_product.effect}</p>
            </div>
          </div>
          <div className="inline-flex w-full border-2 bg-grey-light border-white">
            <div className="w-1/2 px-2 p-1">
              <p>Environment:</p>
            </div>
            <div className="w-1/2 text-left p-1 border-l-4 border-white px-2">
              <p>{_product.environment}</p>
            </div>
          </div>
          <div className="inline-flex w-full border-2 bg-grey-light border-white">
            <div className="w-1/2 px-2 p-1">
              <p>Flower Time:</p>
            </div>
            <div className="w-1/2 text-left p-1 border-l-4 border-white px-2">
              <p>
                {_product.flowerTime.length != 0 ? (
                  <span>
                    {_product.flowerTime[0]} to {_product.flowerTime[1]} Weeks
                  </span>
                ) : (
                  <span>{_product.flowerTime[0]} Weeks </span>
                )}
              </p>
            </div>
          </div>
          <div className="inline-flex w-full border-2 bg-grey-light border-white">
            <div className="w-1/2 px-2 p-1">
              <p>Genetic:</p>
            </div>
            <div className="w-1/2 text-left p-1 border-l-4 border-white px-2">
              <p>{_product.genetic}</p>
            </div>
          </div>
          <div className="inline-flex w-full border-2 bg-grey-light border-white">
            <div className="w-1/2 px-2 p-1">
              <p>Indica:</p>
            </div>
            <div className="w-1/2 text-left p-1 border-l-4 border-white px-2">
              <p>{_product.indica * 100}%</p>
            </div>
          </div>
          {_product.ruderalis ? (
            <div className="inline-flex w-full border-2 bg-grey-light border-white p-1">
              <div className="w-1/2 px-2 p-1">
                <p>Ruderalis:</p>
              </div>
              <div className="w-1/2 text-left p-1 border-l-4 border-white px-2">
                <p>{_product.ruderalis * 100}%</p>
              </div>
            </div>
          ) : null}
          <div className="inline-flex w-full border-2 bg-grey-light border-white">
            <div className="w-1/2 px-2 p-1">
              <p>Sativa:</p>
            </div>
            <div className="w-1/2 text-left p-1 border-l-4 border-white px-2">
              <p>{_product.sativa * 100}%</p>
            </div>
          </div>
          <div className="inline-flex w-full border-2 bg-grey-light border-white">
            <div className="w-1/2 px-2 p-1">
              <p>CBD %:</p>
            </div>
            <div className="w-1/2 text-left p-1 border-l-4 border-white px-2">
              <p>{pCbd}</p>
            </div>
          </div>
          <div className="inline-flex w-full border-2 bg-grey-light border-white">
            <div className="w-1/2 px-2 p-1">
              <p>CNB %:</p>
            </div>
            <div className="w-1/2 text-left p-1 border-l-4 border-white px-2">
              <p>{pCbn}</p>
            </div>
          </div>
          <div className="inline-flex w-full border-2 bg-grey-light border-white">
            <div className="w-1/2 px-2 p-1">
              <p>THC %:</p>
            </div>
            <div className="w-1/2 text-left p-1 border-l-4 border-white px-2">
              <p>{pThc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
