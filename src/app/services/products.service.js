'use strict';

const repository = require('../repositories/products.repository');

let getAllAvailableProducts = async () => {
  const result = await repository.getAllAvailableProducts();
  return result;
}

let getAllProductFromACategory = async (category) => {
  const result = await repository.getAllProductFromACategory(category);
  return result;
}

let getProduct = async (id) => {
  const result = await repository.getProduct(id);
  return result;
}

let createProduct = async ({ name, price, picture, details }) => {
  const result = await repository.createProduct({ name, price, picture, details });
  return result;
}

let updateProduct = async (updatingVariables) => {
  const result = await repository.updateProduct(updatingVariables);
  return result;
}

let deleteProduct = async (id) => {
  const result = await repository.deleteProduct(id);
  return result;
}

module.exports = {
  getAllAvailableProducts,
  getAllProductFromACategory,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};