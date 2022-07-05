const getAllProducts = require('./products/getAllProducts');
const getProduct = require('./products/getProduct');
const addProduct = require('./products/addProduct');
const updateProduct = require('./products/updateProduct');

const addSales = require('./sales/addSales');
const getAllSales = require('./sales/getAllSales');
const getSale = require('./sales/getSale');

module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  addSales,
  getAllSales,
  getSale,
};