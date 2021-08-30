'use strict';

const repository = require('../repositories/products.repository');

let getAllAvailableProducts = async () => {
  const result = await repository.getAllAvailableProducts();
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

let updateProduct = async ({ name, price, picture, details, id }) => {
  const result = await repository.updateProduct({ name, price, picture, details, id });
  return result;
}

let deleteProduct = async (id) => {
  const result = await repository.deleteProduct(id);
  return result;
}

module.exports = { getAllAvailableProducts, getProduct, createProduct, updateProduct, deleteProduct };