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

let createCategory = async (req, res) => {
  const categoryProperties = { ...req.body };

  try {
    const creationResult = await service.createCategory(categoryProperties);
    res.status(201).json({ status: 'created' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

let getCategory = async (req, res) => {
  const id = req.params.id;

  try {
    const categoryInformation = await service.getCategory(id);
    res.status(200).json(categoryInformation);
  }
  catch (error) {
    res.status(500).json({ error: INTERNAL_SERVER_ERROR });
  };
}

let updateCategory = async (req, res) => {
  const id = req.params.id;
  const propertiesToUpdate = { "id": id, ...req.body };

  try {
    const patchResult = await service.updateCategory(propertiesToUpdate);

    if (patchResult.changedRows === 0) {
      res.status(500).json({ error: INTERNAL_SERVER_ERROR });
      return;
    }
    res.status(200).json({ changedRows: patchResult.changedRows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

let deleteCategory = async (req, res) => {
  const id = req.params.id;

  try {
    const deletionResult = await service.deleteCategory(id);
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

module.exports = {
  getAllCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory
}