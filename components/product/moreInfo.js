import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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

  let colorsSativa = [
    "#031275",
    "#063475",
    "#0023FF",
    "#3270bf",
    "#006AFF",
    "#008DFF",
    "#00A3FF",
    "#00B5D8",
    "#2693a9",
    "#5eb4c5",
    "#93cdd8"
  ];
  let colorsIndica = [
    "#0094BF",
    "#0094BF",
    "#0088BF",
    "#007DBF",
    "#0071BF",
    "#0066BF",
    "#005ABF",
    "#004FBF",
    "#0043BF",
    "#0038BF",
    "#002DBF"
  ];
  let colorsRuderalis = [
    "#73ea09",
    "#68caa6",
    "#5f9883",
    "#2cb150",
    "#4aca6d",
    "#89ca61",
    "#afda35",
    "#73ea09",
    "#c0ff08",
    "#a9d232"
  ];

  let bullets = () => {
    let arr = [];

    for (let i = 1; i < 11; i++) {
      let bulletSativa = {
        height: "41px",
        width: "41px",
        background: colorsSativa[i],
        borderRadius: "50%",
        margin: "0 2px"
      };
      let bulletIndica = {
        height: "41px",
        width: "41px",
        background: colorsIndica[i],
        borderRadius: "50%",
        margin: "0 2px"
      };
      let bulletRuderalis = {
        height: "41px",
        width: "41px",
        background: colorsRuderalis[i],
        borderRadius: "50%",
        margin: "0 2px"
      };
      if (_product.sativa * 10 < i) {
        arr.push(
          <div key={i} style={bulletSativa} className="relative">
            <div className="text-white text-xs absolute mt-3 ml-2 opacity-50 font-bold">
              <small>{i * 10}%</small>
            </div>
          </div>
        );
      } else if (_product.ruderalis * 10 < i && _product.ruderalis != 0) {
        arr.push(
          <div key={i} style={bulletIndica} className="relative">
            <div className="text-white text-xs absolute mt-3 ml-2 opacity-50 font-bold">
              <small>{i * 10}%</small>
            </div>
          </div>
        );
      } else {
        arr.push(
          <div key={i} style={bulletRuderalis} className="relative">
            <div className="text-white text-xs absolute mt-3 ml-2 opacity-50 font-bold">
              <small>{i * 10}%</small>
            </div>
          </div>
        );
      }
    }
    return arr;
  };

  return (
    <div className="w-full">
      {/* <div className="text-center">
        <h3 className="vcCompany-similar text-xl font-bold">
          More Information about {_product.alias}
        </h3>
      </div> */}
      <div className="w-full mx-auto mt-8 bg-blue-new p-10 pb-12 mb-64 moreInfoBackground">
        <div className="text-center h-300 pt-4 relative">
          <div className="moreInformation h-300 w-full absolute pin-t" />
          <h3 className="vcCompany-similar text-white text-xl font-bold absolute pin-x">
            More Information about {_product.name} Seed
          </h3>
          <div className="w-800 mt-10 mx-auto p-4 inline-flex absolute pin-x">
            {/* <FontAwesomeIcon
              icon={faPlus}
              className="fa-6x text-white absolute pin-l ml-32 -mt-16"
            /> */}

            <div className="w-650 mx-auto flex flex-wrap justify-between">
              <div className="w-300 inline-flex shadow-md mt-4">
                <div className="w-1/2 px-2 p-1 bg-semi-transparent text-white uppercase text-center">
                  <p className="text-sm font-bold">Type</p>
                </div>

                <div className="bg-white w-1/2 text-sm text-grey p-1 px-2">
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
                  <p>{_product.avgYield}g</p>
                </div>
              </div>
              <div className="w-300 inline-flex shadow-md mt-4">
                <div className="w-1/2 px-2 p-1 bg-semi-transparent text-white uppercase text-center">
                  <p className="text-sm font-bold">Country</p>
                </div>

                <div className="bg-white w-1/2 text-sm text-grey p-1 px-2">
                  <p>{_product.country || "N/A"}</p>
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
        <div className="w-500 mx-auto absolute bg-white pin-x mt-2 flex flex-wrap justify-between">
          <div className="w-500 shadow-md">
            <div className="w-full p-2 bg-grey-light text-grey uppercase text-center">
              <p className="text-lg font-bold p-1">Strain Characteristics</p>
            </div>
            <div className="w-full text-xl text-right text-grey p-4 px-4 mt-3 mb-2 relative">
              <div className="inline-flex w-full">
                <div className="inline-flex w-full justify-around">
                  {bullets()}
                </div>
                {/* <div className="absolute pin-r text-xs opacity-25 mr-2 mt-1">
                  100%
                </div> */}
              </div>
              <div
                className="flex justify-center w-full"
                style={{
                  width: "100%"
                }}
              >
                {" "}
                {_product.ruderalis != 0 ? (
                  <div
                    style={{
                      width: `${_product.ruderalis * 100}%`,
                      borderTop: "4px solid #68caa6",
                      marginRight: "4px"
                    }}
                    className="border-t-2 mt-2 relative"
                  >
                    <div
                      style={{
                        height: "15px",
                        background: "#68caa6",
                        width: "4px",
                        marginTop: "-17px"
                      }}
                      className="absolute pin-l"
                    />
                    <div
                      style={{
                        width: "0px",
                        height: "0px",
                        borderLeft: "10px solid transparent",
                        borderRight: "10px solid transparent",
                        borderTop: "10px solid #68caa6",
                        marginTop: "0px",
                        left: "0",
                        right: "0",
                        margin: "auto"
                      }}
                      className="absolute"
                    />
                    <div
                      style={{
                        height: "15px",
                        background: "#68caa6",
                        width: "4px",
                        marginTop: "-17px"
                      }}
                      className="absolute pin-r"
                    />
                    <p
                      style={{ color: "#68caa6" }}
                      className="text-center font-bold mt-4 text-base uppercase"
                    >
                      Rud.
                    </p>
                    <p className="opacity-50 text-center text-2xl font-bold">
                      {_product.ruderalis * 100}%
                    </p>
                  </div>
                ) : null}
                <div
                  style={{
                    width: `${_product.sativa * 100}%`,
                    borderTop: "4px solid #89ca61",
                    marginRight: "2px"
                  }}
                  className="border-t-2 mt-2 relative"
                >
                  <div
                    style={{
                      height: "15px",
                      background: "#89ca61",
                      width: "4px",
                      marginTop: "-17px"
                    }}
                    className="absolute pin-l"
                  />
                  <div
                    style={{
                      width: "0px",
                      height: "0px",
                      borderLeft: "10px solid transparent",
                      borderRight: "10px solid transparent",
                      borderTop: "10px solid #89ca61",
                      marginTop: "0px",
                      left: "0",
                      right: "0",
                      margin: "auto"
                    }}
                    className="absolute"
                  />
                  <div
                    style={{
                      height: "15px",
                      background: "#89ca61",
                      width: "4px",
                      marginTop: "-17px"
                    }}
                    className="absolute pin-r"
                  />
                  <p
                    style={{ color: "#89ca61" }}
                    className="text-center mt-4 font-bold text-base uppercase"
                  >
                    Sativa
                  </p>
                  <p className="opacity-50 text-center text-2xl font-bold">
                    {_product.sativa * 100}%
                  </p>
                </div>
                <div
                  style={{
                    width: `${_product.indica * 100}%`,
                    borderTop: "4px solid #73c7d8",
                    marginLeft: "2px"
                  }}
                  className="border-t-2 mt-2 relative"
                >
                  <div
                    style={{
                      height: "15px",
                      background: "#73c7d8",
                      width: "4px",
                      marginTop: "-17px"
                    }}
                    className="absolute pin-l"
                  />
                  <div
                    style={{
                      height: "15px",
                      background: "#73c7d8",
                      width: "4px",
                      marginTop: "-17px"
                    }}
                    className="absolute pin-r"
                  />
                  <div
                    style={{
                      width: "0px",
                      height: "0px",
                      borderLeft: "10px solid transparent",
                      borderRight: "10px solid transparent",
                      borderTop: "10px solid #73c7d8",
                      marginTop: "0px",
                      left: "0",
                      right: "0",
                      margin: "auto"
                    }}
                    className="absolute"
                  />
                  <p
                    style={{ color: "#73c7d8" }}
                    className="text-center mt-4 font-bold text-base uppercase"
                  >
                    Indica
                  </p>
                  <p className="opacity-50 text-center text-2xl font-bold">
                    {_product.indica * 100}%
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full text-sm p-1 text-center text-xs bg-grey-light opacity-50">
              <p className="text-xs font-bold">* Approx values</p>
            </div>
          </div>
          {/* <div className="inline-flex w-full border-2 bg-grey-light border-white">
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
              <p>Type:</p>
            </div>
            <div className="w-1/2 text-left p-1 border-l-4 border-white px-2">
              <p>{_product.type}</p>
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
