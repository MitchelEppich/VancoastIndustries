//input should have 1 product, packSize (int), quantity(int)
export const stringBuilder = input => {
  let product = input.product;
  let savedItem = "";
  console.log(input);
  //company
  savedItem += companies[product.company.name];
  //sotiId
  savedItem += product.sotiId;
  //packSize
  savedItem += input.packSize;
  //quantity
  savedItem += "x" + input.quantity;
  return savedItem;
};

// input should have all products, the savedItems (array of strings)
export const itemBuilder = input => {
  let savedItems = input.savedItems;
  let products = input.products;
  savedItems = savedItems.map(item => mapItem(item, products));

  return savedItems;
};

let mapItem = (product, products) => {
  //break string apart
  let companyAccronym = product.slice(0, 3),
    sotiId = product.slice(3, 6),
    packSize = parseInt(product.slice(6, 8)),
    quantity = parseInt(product.slice(8).replace("x", ""));
  //aquire company name
  let company = Object.entries(companies).find(company => {
    return company[1] == companyAccronym;
  })[0];
  // filter out products by the wrong company
  products = products.filter((item, index) => {
    return item.company.name == company;
  });
  //grab product by sotiId
  product = products.find(item => {
    // console.log(item.sotiId == sotiId);
    return item.sotiId == sotiId;
  });
  // console.log(sotiId);
  // add quantity and packSize
  product = {
    ...product,
    quantity: quantity,
    packSize: packSize
  };

  return product;
};

let companies = {
  "sonoma seeds": "son",
  "crop king seeds": "cks",
  "sunwest genetics": "swg"
};
