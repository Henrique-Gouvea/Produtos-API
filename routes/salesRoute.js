const express = require('express');

const salesRouter = express.Router();
const controllers = require('../controllers');

// salesRouter.post('/', controllers.getAllSales);

module.exports = salesRouter;