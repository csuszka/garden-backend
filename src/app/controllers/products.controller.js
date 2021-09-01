'use strict';

// const express = require('express');
// const router = express.Router();
const service = require('../services/products.service');
const { INTERNAL_SERVER_ERROR } = require('../constants');

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

// router.post

let updateProduct = async (req, res) => {
  const id = req.params.id;
  const updatingVariables = { "id": id, ...req.body };

  try {
    const patchResult = await service.updateProduct(updatingVariables);

    if (patchResult.changedRows === 0) {
      res.status(500).json({ error: INTERNAL_SERVER_ERROR });
      return;
    }
    res.status(200).json({ changedRows: patchResult.changedRows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getAllProductsOfACategory,
  updateProduct
};