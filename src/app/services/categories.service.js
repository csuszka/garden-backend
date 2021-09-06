'use strict';

const repository = require('../repositories/categories.repository');

let getAllCategories = async () => {
  const result = await repository.getAllCategories();
  return result;
}

module.exports = {
  getAllCategories
}