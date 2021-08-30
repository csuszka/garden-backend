'use strict';

const express = require('express');
const router = express.Router();
// const heartbeatController = require('./controllers/heartbeat.controller');
const products = require('./controllers/products.controller');

//////////////////////////////////

router.get('/products', products.getAllProducts);
// router.post
router.patch('/products/:id', products.updateProduct);

//////////////////////////////////

module.exports = router;
