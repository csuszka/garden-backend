'use strict';

const repository = require('../repositories/categories.repository');

let getAllCategories = async () => {
  const result = await repository.getAllCategories();
  return result;
}

let createCategory = async (categoryProperties) => {
  const result = await repository.createCategory(categoryProperties);
  return result;
}

let getCategory = async (id) => {
  const result = await repository.getCategory(id);
  return result;
}

let updateCategory = async (propertiesToUpdate) => {
  const result = await repository.updateCategory(propertiesToUpdate);
  return result;
}

let deleteCategory = async (id) => {
  const result = await repository.deleteCategory(id);
  return result;
}

module.exports = {
  getAllCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory
}