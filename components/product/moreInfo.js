import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import StrainCharacteristics from "./strainCharacteristics";

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

  let yields =
    _product.yield[1] != null
      ? _product.yield[0] + " / " + _product.yield[1]
      : _product.yield[0];
  return (
    <div className="w-full">
      <div className="w-full mx-auto mt-8 bg-blue-new p-10 sm:p-6 pb-12 mb-64 moreInfoBackground">
        <div className="text-center h-300 sm:h-500 lg:h-500 pt-0 lg:pt-10 relative">
          <div className="moreInformation h-300 md:h-500 w-full absolute pin-t" />
          <h3 className="vcCompany-similar text-white text-xl font-bold absolute pin-x text-shadow ">
            More Info about{" "}
            <span className="capitalize"> {_product.alias}</span> Seed
          </h3>
          <div className="w-800 mt-10 mx-auto p-4 inline-flex absolute pin-x lg:w-600 md:w-400 sm:w-full sm:py-10 sm:mb-24">
            <div className="w-650 mx-auto flex flex-wrap justify-between lg:w-600 lg:justify-center md:w-400 md:justify-center sm:w-full sm:justify-center">
              <div className="w-300 inline-flex shadow-md mt-4">
                <div className="w-1/2 px-2 p-1 bg-semi-transparent text-white uppercase text-center">
                  <p className="text-sm font-bold">Type</p>
                </div>

                <div className="bg-white w-1/2 text-sm capitalize text-grey p-1 px-2">
                  <p>{_product.type}</p>
                </div>
              </div>
              <div className="w-300 inline-flex shadow-md mt-4">
                <div className="w-1/2 px-2 p-1 bg-semi-transparent text-white uppercase text-center">
                  <p className="text-sm font-bold">Genetic</p>
                </div>

                <div className="bg-white w-1/2 text-sm text-grey p-1 px-2">
                  <p>{_product.genetic}</p>
                </div>
              </div>
              <div className="w-300 inline-flex shadow-md mt-4">
                <div className="w-1/2 px-2 p-1 bg-semi-transparent text-white uppercase text-center">
                  <p className="text-sm font-bold">Average Yield</p>
                </div>

                <div className="bg-white w-1/2 text-sm text-grey p-1 px-2">
                  <p>{yields}g</p>
                </div>
              </div>
              <div className="w-300 inline-flex shadow-md mt-4">
                <div className="w-1/2 px-2 p-1 bg-semi-transparent text-white uppercase text-center">
                  <p className="text-sm font-bold">Country</p>
                </div>

                <div className="bg-white w-1/2 text-sm text-grey p-1 px-2">
                  <p>{_product.country != null ? _product.country : "N/A"}</p>
                </div>
              </div>
              <div className="w-300 inline-flex shadow-md mt-4">
                <div className="w-1/2 px-2 p-1 bg-semi-transparent text-white uppercase text-center">
                  <p className="text-sm font-bold">Difficulty</p>
                </div>

                <div className="bg-white w-1/2 text-sm text-grey p-1 px-2">
                  <p>{_product.difficulty}</p>
                </div>
              </div>
              <div className="w-300 inline-flex shadow-md mt-4">
                <div className="w-1/2 px-2 p-1 bg-semi-transparent text-white uppercase text-center">
                  <p className="text-sm font-bold">Environment</p>
                </div>
                <div className="bg-white w-1/2 text-sm text-grey p-1 px-2">
                  <p>{_product.environment}</p>
                </div>
              </div>
              <div className="w-300 inline-flex shadow-md mt-4">
                <div className="w-1/2 px-2 p-1 bg-semi-transparent text-white uppercase text-center">
                  <p className="text-sm font-bold">Effects</p>
                </div>
                <div className="bg-white w-1/2 text-sm text-grey p-1 px-2">
                  <p>
                    {_product.effect != null && _product.effect.length != 0
                      ? _product.effect
                      : "N/A"}
                  </p>
                </div>
              </div>
              <div className="w-300 inline-flex shadow-md mt-4">
                <div className="w-1/2 px-2 p-1 bg-semi-transparent text-white uppercase text-center">
                  <p className="text-sm font-bold">THC %</p>
                </div>

                <div className="bg-white w-1/2 text-sm text-grey p-1 px-2">
                  <p>{thc}</p>
                </div>
              </div>
              <div className="w-300 inline-flex shadow-md mt-4">
                <div className="w-1/2 px-2 p-1 bg-semi-transparent text-white uppercase text-center">
                  <p className="text-sm font-bold">CBD %</p>
                </div>

                <div className="bg-white w-1/2 text-sm text-grey p-1 px-2">
                  <p>{cbd}</p>
                </div>
              </div>
              <div className="w-300 inline-flex shadow-md mt-4">
                <div className="w-1/2 px-2 p-1 bg-semi-transparent text-white uppercase text-center">
                  <p className="text-sm font-bold">CBN %</p>
                </div>
                <div className="bg-white w-1/2 text-sm text-grey p-1 px-2">
                  <p>{cbn}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <StrainCharacteristics {...props} />
      </div>
    </div>
  );
};

export default MoreInfo;
