import data from "../../../data/data.json";

function getProductCategories(category) {
  const productcategories = data[category];

  return productcategories;
}

export { getProductCategories };
