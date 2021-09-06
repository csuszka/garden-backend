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

let createProduct = async (productProperties) => {
  const result = await repository.createProduct(productProperties);
  return result;
}

let updateProduct = async (propertiesToUpdate) => {
  const result = await repository.updateProduct(propertiesToUpdate);
  return result;
}

let deleteProduct = async (id) => {
  const result = await repository.deleteProduct(id);
  return result;
}

module.exports = {
  getAllAvailableProducts,
  getAllCategories,
  getAllProductFromACategory,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};