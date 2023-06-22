import data from "../../../data/data.json";

function getProducts(category, productcategoryId) {
  let products = data[category][productcategoryId]["products"];

  return products;
}

export { getProducts };
