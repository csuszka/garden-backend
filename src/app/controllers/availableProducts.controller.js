'use strict';

const express = require('express');
const router = express.Router();
const service = require('../services/availableProducts.service');
const { INTERNAL_SERVER_ERROR } = require('../constants');

router.get('/', async (req, res) => {
  try {
    const availableProducts = await service.getAvailableProducts();
    res.status(200).json(availableProducts);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: INTERNAL_SERVER_ERROR });
  };
});

// router.post

router.patch('/:id', async (req, res) => {
  const id = req.params.id;

  try {

    //update logic

    if (ticket_result.changedRows === 0) {
      res.status(500).json({ error: INTERNAL_SERVER_ERROR });
      return;
    }

    res.status(200).json({ order: 'accepted', ticket: 'activated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;