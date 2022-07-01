const express = require('express');

const salesRouter = express.Router();
const controllers = require('../controllers');

salesRouter.post('/', controllers.addSales);

module.exports = salesRouter;