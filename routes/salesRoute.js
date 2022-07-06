const express = require('express');

const salesRouter = express.Router();
const controllers = require('../controllers');

salesRouter.post('/', controllers.addSales);

salesRouter.get('/', controllers.getAllSales);

salesRouter.get('/:id', controllers.getSale);

salesRouter.delete('/:id', controllers.deleteSale);

module.exports = salesRouter;