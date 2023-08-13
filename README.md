# Dev Threadz

## Introduction

Use JavaScript's `forEach`, `filter`, `map`, and `reduce` methods to implement the features outlined below. Write your code in the four empty functions defined in `script.js`. They've already been connected to the logic the rest of the team has written.


## Helper Function

**`newProductCard(productData)`**

This function accepts a single product's data as an argument. It uses the data to create a new product card and append it to the page. You'll need it to complete the first feature below.


## Your Tasks


### 1. Render all products on the page

**`showAllProducts(products)`**

| Parameter  | Example                     |
| ---------- | --------------------------- |
| `products` | `[product1, product2, ...]` |

Use `forEach` to iterate through the products in the array. On each iteration, call `newProductCard` and pass in the current item from the array as an argument. If you've done this correctly, all six products should be rendered on the page.


---


### 2. Search by product name

**`getFilteredProducts(productNames, query)`**

| Parameter      | Example                                 |
| -------------- | --------------------------------------- |
| `productNames` | `["Bootstrap Shirt", "CSS Shirt", ...]` |
| `query`        | `"html shirt"`                          |

Use the `filter` method to return an array of product names that match the specified `query` string. Search should not be case sensitive. Test that it works by using the page's search bar to search for a product by name.


---


### 3. Convert product prices to different currencies

**`getConvertedPrices(productPrices, currency)`**

| Parameter       | Example               |
| --------------- | --------------------- |
| `productPrices` | `[24.99, 29.99, ...]` |
| `currency`      | `"jpy"`               |

Use the `map` method to return an array that contains each price from `productPrices` converted to the specified `currency`. `currency` is a string that will be either:

- `"usd"` for US Dollars
- `"gbp"` for British Pounds
- `"jpy"` for Japanese Yen

Product prices are all stored in US Dollars. You'll need to look up the conversion rates for the British Pound and Japanese Yen. Test your logic by selecting the different currencies from the dropdown in the navbar.


---


### 4. Calculate the shopping cart total

**`getCartTotal(cartPrices)`**

| Parameter    | Example               |
| ------------ | --------------------- |
| `cartPrices` | `[24.99, 29.99, ...]` |

Use the `reduce` method to return the sum of all prices in the `cartPrices` array. Test it out by adding a few products to the cart.
