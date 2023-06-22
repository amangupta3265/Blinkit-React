function sortProducts(event, products) {
  let value = event.target.options[event.target.selectedIndex].value;

  let sortedProducts = products;

  // console.log("props products", this.props.products);

  if (value === "priceLowToHigh") {
    sortedProducts.sort(function (a, b) {
      return a.product__newPrice - b.product__newPrice;
    });
  } else if (value === "priceHighToLow") {
    sortedProducts.sort(function (a, b) {
      return b.product__newPrice - a.product__newPrice;
    });
  }

  return sortedProducts;
}

export { sortProducts };
