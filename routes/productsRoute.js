const express = require('express');

const productsRoute = express.Router();
const controllers = require('../controllers');

productsRoute.get('/', controllers.getAllProducts);

productsRoute.post('/', controllers.addProduct);

productsRoute.get('/:id', controllers.getProduct);

productsRoute.put('/:id', controllers.updateProduct);

module.exports = productsRoute;