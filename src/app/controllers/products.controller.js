'use strict';

const service = require('../services/products.service');
const { INTERNAL_SERVER_ERROR } = require('../constants');

let createProduct = async (req, res) => {
  const productProperties = { ...req.body };

  try {
    const creationResult = await service.createProduct(productProperties);
    res.status(201).json({ status: 'created' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

let getProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const productInformation = await service.getProduct(id);
    res.status(200).json(productInformation);
  }
  catch (error) {
    res.status(500).json({ error: INTERNAL_SERVER_ERROR });
  };
}

let updateProduct = async (req, res) => {
  const id = req.params.id;
  const propertiesToUpdate = { "id": id, ...req.body };

  try {
    const patchResult = await service.updateProduct(propertiesToUpdate);

    if (patchResult.changedRows === 0) {
      res.status(500).json({ error: INTERNAL_SERVER_ERROR });
      return;
    }
    res.status(200).json({ changedRows: patchResult.changedRows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

let deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const deletionResult = await service.deleteProduct(id);
    if (deletionResult.affectedRows === 0) {
      res.status(500).json({ error: INTERNAL_SERVER_ERROR });
      return;
    }
    res.status(200).json(deletionResult);
  }
  catch (error) {
    res.status(500).json({ error: INTERNAL_SERVER_ERROR });
  };
}

let getAllProducts = async (req, res) => {
  try {
    const allAvailableProducts = await service.getAllAvailableProducts();
    res.status(200).json(allAvailableProducts);
  }
  catch (error) {
    res.status(500).json({ error: INTERNAL_SERVER_ERROR });
  };
};

let getAllProductsOfACategory = async (req, res) => {
  const category = req.params.category;
  // waiting on new table!

  try {
    const allProductsOfTheCategory = await service.getAllProductFromACategory(category);
    res.status(200).json(allProductsOfTheCategory);
  } catch (error) {
    res.status(500).json({ error: INTERNAL_SERVER_ERROR });
  }
}

module.exports = {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getAllCategories,
  getAllProductsOfACategory
};
