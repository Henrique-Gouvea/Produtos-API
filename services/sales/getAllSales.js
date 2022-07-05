const models = require('../../models');

const getAllSales = async () => {
  const sales = await models.getAllSales();
  return sales;
};

module.exports = getAllSales;