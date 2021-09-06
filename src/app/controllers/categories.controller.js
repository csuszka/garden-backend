'use strict';

const service = require('../services/categories.service');
const { INTERNAL_SERVER_ERROR } = require('../constants');

let getAllCategories = async (req, res) => {
  try {
    const allCategories = await service.getAllCategories();
    res.status(200).json(allCategories);
  }
  catch (error) {
    res.status(500).json({ error: INTERNAL_SERVER_ERROR })
  }
}

module.exports = {
  getAllCategories
}