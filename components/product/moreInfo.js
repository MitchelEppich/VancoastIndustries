const MoreInfo = props => {
  let _product = props.product.currentProduct;
  let thc =
    _product.thc[1] != null
      ? _product.thc[0] + "% - " + _product.thc[1] + "%"
      : _product.thc + "%";
  let cbd =
    _product.cbd[1] != null
      ? _product.cbd[0] + "% - " + _product.cbd[1] + "%"
      : _product.cbd + "%";
  let cbn =
    _product.cbn[1] != null
      ? _product.cbn[0] + "% - " + _product.cbn[1] + "%"
      : _product.cbn + "%";
  let cbdRatioWeighting, thcRatioWeighting;
  if (_product.cbd[0] < _product.thc[0]) {
    cbdRatioWeighting = _product.cbd[0] / _product.cbd[0];
    thcRatioWeighting = _product.thc[0] / _product.cbd[0];
  } else {
    cbdRatioWeighting = _product.cbd[0] / _product.thc[0];
    thcRatioWeighting = _product.thc[0] / _product.thc[0];
  }
  let cbdToThc =
    Math.round(cbdRatioWeighting) + ":" + Math.round(thcRatioWeighting);
  return (
    <div className="w-full">
      <div className="text-center">
        <h3 className="vcCompany-similar text-xl font-bold">
          More Information about {_product.alias}
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
              <p>{cbd}</p>
            </div>
          </div>
          <div className="inline-flex w-full border-2 bg-grey-light border-white">
            <div className="w-1/2 px-2 p-1">
              <p>CBN %:</p>
            </div>
            <div className="w-1/2 text-left p-1 border-l-4 border-white px-2">
              <p>{cbn}</p>
            </div>
          </div>
          <div className="inline-flex w-full border-2 bg-grey-light border-white">
            <div className="w-1/2 px-2 p-1">
              <p>THC %:</p>
            </div>
            <div className="w-1/2 text-left p-1 border-l-4 border-white px-2">
              <p>{thc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
