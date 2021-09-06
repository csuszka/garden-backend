'use strict';

const express = require('express');
const router = express.Router();
const products = require('./controllers/products.controller');

router.get('/categories/all', products.getAllCategories);

router.post('/categories/create', products.createCategory);
router.get('/categories/:id', products.getProduct);
router.patch('/categories/:id', products.updateProduct);
router.delete('/categories/:id', products.deleteProduct);

router.get('/products/all', products.getAllProducts);
router.get('/products/category/:category', products.getAllProductsOfACategory);

router.post('/products/create', products.createProduct);
router.get('/products/:id', products.getProduct);
router.patch('/products/:id', products.updateProduct);
router.delete('/products/:id', products.deleteProduct);

module.exports = router;
