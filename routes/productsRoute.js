const express = require('express');

const productsRouter = express.Router();
const controllers = require('../controllers');

productsRouter.post('/', controllers.getAllProducts);

productsRouter.post('/:id', controllers.getProduct);

module.exports = loginRouter;