'use strict';

const repository = require('../repositories/availableProducts.repository');

let getAvailableProducts = async () => {
  const result = await repository.getAvailableProducts();
  return result;
}

let updateProduct = async () => {
  const result = await repository.updateProduct();
  return result;
}

module.exports = { getAvailableProducts };