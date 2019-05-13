const StrainCharacteristics = props => {
  let _product = props.product.currentProduct;
  let colorsSativa = [
    "#89ca61",
    "#80bc5b",
    "#77af54",
    "#6ea14e",
    "#659448",
    "#5d8943",
    "#567e3e",
    "#4e7339",
    "#466733",
    "#3f5c2e",
    "#375128",
    "#304623"
  ];
  let colorsIndica = [
    "#73C7D8",
    "#6ABECF",
    "#62B5C6",
    "#5AADBE",
    "#51A4B5",
    "#499CAC",
    "#4193A4",
    "#388B9B",
    "#308292",
    "#287A8A"
  ];
  let colorsRuderalis = [
    "#68caa6",
    "#61bc9b",
    "#5aaf90",
    "#54a185",
    "#4d947a",
    "#498b73",
    "#44836c",
    "#407a65",
    "#3d735f",
    "#396d5a",
    "#366654",
    "#33604f"
  ];

  let bullets = () => {
    // _product.ruderalis = 0.6;
    // _product.sativa = 0.2;
    // _product.indica = 0.2;
    let arr = [];

    for (let i = 0; i < 10; i++) {
      let bulletSativa = {
        background: colorsSativa[i]
      };
      let bulletIndica = {
        background: colorsIndica[i]
      };
      let bulletRuderalis = {
        background: colorsRuderalis[i]
      };

      arr.push(
        <div
          key={i}
          style={
            _product.ruderalis * 10 > i
              ? bulletRuderalis
              : 10 - _product.indica * 10 > i
              ? bulletSativa
              : bulletIndica
          }
          className="relative h-10 w-10 sm:h-6 sm:w-6 rounded-full mx-1"
        >
          <div className="text-white w-full h-full text-xs absolute font-bold">
            <div className="w-full h-full flex items-center justify-center">
              <small>{(i + 1) * 10}%</small>
            </div>
          </div>
        </div>
      );
    }
    return arr;
  };

  return (
    <div className="w-700 mx-auto absolute bg-white pin-x mt-2 flex flex-wrap justify-between sm:mt-24 sm:justify-center md:w-4/5 lg:w-4/5 sm:w-300">
      <div className="w-700 shadow-md md:w-full lg:w-full sm:w-300">
        <div className="w-full p-2 bg-grey-light text-grey uppercase text-center">
          <p className="text-lg font-bold p-1">Strain Characteristics</p>
        </div>
        <div className="w-full text-xl text-right text-grey p-4 px-4 mt-3 mb-2 relative">
          <div className="inline-flex w-full">
            <div className="inline-flex w-full justify-around">{bullets()}</div>
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
                width: `${(_product.sativa * 100).toFixed(2)}%`,
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
                {(_product.sativa * 100).toFixed(0)}%
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
