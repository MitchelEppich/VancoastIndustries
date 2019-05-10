const StrainCharacteristics = props => {
  let _product = props.product.currentProduct;
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
        background: colorsSativa[i],
        borderRadius: "50%",
        margin: "0 2px"
      };
      let bulletIndica = {
        // height: "40px",
        // width: "40px",
        background: colorsIndica[i],
        borderRadius: "50%",
        margin: "0 2px"
      };
      let bulletRuderalis = {
        // height: "40px",
        // width: "40px",
        background: colorsRuderalis[i],
        borderRadius: "50%",
        margin: "0 2px"
      };
      if (_product.sativa * 10 < i) {
        arr.push(
          <div
            key={i}
            style={bulletSativa}
            className="relative h-10 w-10 sm:h-6 sm:w-6"
          >
            <div className="text-white text-xs absolute mt-3 ml-2 opacity-50 font-bold">
              <small>{i * 10}%</small>
            </div>
          </div>
        );
      } else if (_product.ruderalis * 10 < i && _product.ruderalis != 0) {
        arr.push(
          <div
            key={i}
            style={bulletIndica}
            className="relative h-10 w-10 sm:h-6 sm:w-6"
          >
            <div className="text-white text-xs absolute mt-3 ml-2 opacity-50 font-bold">
              <small>{i * 10}%</small>
            </div>
          </div>
        );
      } else {
        arr.push(
          <div
            key={i}
            style={bulletRuderalis}
            className="relative h-10 w-10 sm:h-6 sm:w-6"
          >
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
    <div className="w-700 mx-auto absolute bg-white pin-x mt-2 flex flex-wrap justify-between sm:mt-24 sm:justify-center sm:w-300">
      <div className="w-700 shadow-md sm:w-300">
        <div className="w-full p-2 bg-grey-light text-grey uppercase text-center">
          <p className="text-lg font-bold p-1">Strain Characteristics</p>
        </div>
        <div className="w-full text-xl text-right text-grey p-4 px-4 mt-3 mb-2 relative">
          <div className="inline-flex w-full">
            <div className="inline-flex w-full justify-around">{bullets()}</div>
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
    </div>
  );
};

export default StrainCharacteristics;
