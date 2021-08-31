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
  catch (err) {
    console.log('controlleree')
    console.log(err);
    res.status(500).json({ error: INTERNAL_SERVER_ERROR });
  };
};

// router.post

let updateProduct = async (req, res) => {
  const id = req.params.id;

  try {

    //update logic

    if (patchResult.changedRows === 0) {
      res.status(500).json({ error: INTERNAL_SERVER_ERROR });
      return;
    }

    res.status(200).json({ order: 'accepted', ticket: 'activated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  updateProduct
};