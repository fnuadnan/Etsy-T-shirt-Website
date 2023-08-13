function showAllProducts(products) {
  products.forEach(product => {
    newProductCard(product);
  });
}

function getFilteredProducts(productNames, query) {
  //filter
  return productNames.filter(productName => 
    productName.toLowerCase().includes(query.toLowerCase())
  );
}

function getConvertedPrices(productPrices, currency) {
  let conversionRate = 1;

  switch(currency) {
    case "gbp":
      conversionRate = 0.75;
      break;
    case "jpy":
      conversionRate = 110;
      break;
    case "usd":
    default:
      conversionRate = 1;  // This will keep prices in USD if another value is passed in
  }

  return productPrices.map(price => price * conversionRate);
}

function getCartTotal(cartPrices) {
  return cartPrices.reduce((total, price) => total + price, 0);
}

showAllProducts(PRODUCTS);
