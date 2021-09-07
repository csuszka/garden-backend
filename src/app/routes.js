'use strict';

const express = require('express');
const router = express.Router();
const categories = require('./controllers/categories.controller');
const products = require('./controllers/products.controller');

router.get('/categories/all', categories.getAllCategories);

router.post('/categories/create', categories.createCategory);
router.get('/categories/:id', categories.getCategory);
router.patch('/categories/:id', categories.updateCategory);
router.delete('/categories/:id', categories.deleteCategory);

router.get('/products/all', products.getAllProducts);
router.get('/products/category/:category', products.getAllProductsOfACategory);

router.post('/products/create', products.createProduct);
router.get('/products/:id', products.getProduct);
router.patch('/products/:id', products.updateProduct);
router.delete('/products/:id', products.deleteProduct);

module.exports = router;
