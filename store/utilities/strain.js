let inferStrainData = strain => {
  let ret = {};
  let _countries = [
    "Canada",
    "United States",
    "Spain",
    "Netherlands",
    "United Kingdom",
    "South Africa"
  ];
  let _genetics = ["Feminized", "Autoflower", "Regular", "CBD", "Dwarf", "Mix"];
  let _difficulties = ["Easy", "Moderate", "Experienced", "Master"];
  let _environments = ["Indoors or Outdoors", "Indoors", "Outdoors"];
  let _types = ["Sativa", "Indica", "Hybrid"];
  let _brands = ["crop king seeds", "sonoma seeds", "sunwest genetics"];

  let {
    company,
    country,
    difficulty,
    genetic,
    type,
    environment,
    cbd,
    cbn,
    thc,
    alias,
    yield: _yield,
    flowerTime,
    sativa,
    indica,
    ruderalis
  } = strain;

  //  Country
  if (country != null)
    (() => {
      let str = "";
      do {
        let _countryIndex = country.shift();
        let _countriesLeft = country.length;

        str += _countries[_countryIndex];

        if (_countriesLeft > 1) str += ", ";
        else if (_countriesLeft == 1) str += " and ";
      } while (country.length > 0);
      ret.country = str;
    })();

  //  Difficulty
  if (difficulty != null) {
    ret.difficulty = _difficulties[difficulty];
    ret.ndifficulty = difficulty;
  }

  //  Genetics
  if (genetic != null) ret.genetic = _genetics[genetic];

  //  Names
  if (alias != null)
    (() => {
      let _alias = alias;
      _alias = _alias
        .toLowerCase()
        .replace("cannabis", "")
        .replace("seeds", "")
        .replace("feminized", "")
        .replace("autoflower", "");
      if (genetic != "Mix") _alias = _alias.replace(genetic, "");
      else _alias = _alias.replace("mix", "mixed");
      // if (genetic == "CBD") _alias = _alias.replace("CB", "");
      ret.alias = _alias.replace(/\s+/g, " ").trim();
    })();

  //  Types
  if (type != null) ret.type = _types[type];
  else ret.type = sativa > 0.6 ? "sativa" : indica > 0.6 ? "indica" : "hybrid";

  //  Environment
  if (environment != null) ret.environment = _environments[environment];

  //  cbd
  if (cbd != null)
    (() => {
      let _max = cbd[cbd.length - 1];
      if (_max >= 0.7) ret.cbdQ = "high";
      else ret.cbdQ = "low";
    })();

  //  thc
  if (thc != null)
    (() => {
      let _max = thc[thc.length - 1];
      if (_max >= 18.49) ret.thcQ = "high";
      else ret.thcQ = "low";
    })();

  //   pcbd = pcbd.map(a => `${a.toFixed(2)}%`).join("-");
  //   pcbn = pcbn.map(a => `${a.toFixed(2)}%`).join("-");
  //   pthc = pthc.map(a => `${a.toFixed(2)}%`).join("-");

  //  Yield
  if (_yield != null) {
    (() => {
      let arr = [];

      let { _combo, _avg } = (() => {
        let _str;
        let _avg;
        let _i = _yield[0];
        let _o = _yield[1];
        if (_i != -1 && _o != -1 && _i != _o) {
          _avg = (_i + _o) / 2;
          if (_i > _o) _str = `${_o}g to ${_i}g *`;
          else _str = `${_i}g to ${_o}g *`;
        } else if (_i == _o || _o == -1) {
          _str = `${_i}g *`;
          _avg = _i;
        } else if (_i == -1) {
          _str = `${_o}g *`;
          _avg = _o;
        }

        return { _combo: _str, _avg };
      })();
      do {
        let _output = _yield.shift();
        if (_output != -1) {
          if (_yield.length == 1) _output = `${_output}g Indoors`;
          else _output = `${_output}g Outdoors`;
        }
        arr.push(_output);
      } while (_yield.length > 0);
      arr.push(_combo);
      ret.avgYield = _avg;
      ret.yield = arr;
    })();
  }

  // BrandLogoPath
  if (company.alias) {
    let brandLogoPath;
    switch (_brands.indexOf(company.alias)) {
      case 0:
        brandLogoPath = "../static/img/assets/cks-logo.png";
        break;
      case 1:
        brandLogoPath = "../static/img/assets/sonoma-logo.png";
        break;
      case 2:
        brandLogoPath = "../static/img/assets/sunwest-logo.png";
        break;
      default:
        brandLogoPath = "../static/img/assets/vancoast-watermark.png";
        break;
    }
    ret.brandLogoPath = brandLogoPath;
  }
  // if (flowerTime != null) {
  //   let _upper = (flowerTime.includes(" to ")
  //     ? flowerTime.split(" to ")[1]
  //     : flowerTime
  //   ).replace(/\D/g, "");
  //   ret.nFlowerTime = parseInt(_upper);
  // }
  return {
    ...strain,
    ...ret
  };
};

module.exports = {
  inferStrainData
};
