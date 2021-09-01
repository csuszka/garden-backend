'use strict';

const express = require('express');
const router = express.Router();
const products = require('./controllers/products.controller');

router.post('/products/create', products.createProduct);
router.get('/products/:id', products.getProduct);
router.patch('/products/:id', products.updateProduct);
router.delete('/products/:id', products.deleteProduct);

router.get('/products/all', products.getAllProducts);
router.get('/products/category/:category', products.getAllProductsOfACategory);

module.exports = router;
