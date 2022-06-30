const express = require('express');

const productsRoute = express.Router();
const controllers = require('../controllers');

productsRoute.get('/', controllers.getAllProducts);

productsRoute.get('/:id', controllers.getProduct);

module.exports = productsRoute;