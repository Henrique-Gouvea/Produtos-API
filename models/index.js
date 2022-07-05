const getAllProducts = require('./products/getAllProducts');
const getProduct = require('./products/getProduct');
const addProduct = require('./products/addProduct');

const addSales = require('./sales/addSales');
const createSale = require('./sales/createSale');
const getAllSales = require('./sales/getAllSales');

module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  addSales,
  createSale,
  getAllSales,
};