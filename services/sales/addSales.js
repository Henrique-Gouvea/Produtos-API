const models = require('../../models');

const addSales = async (newSales) => {
  const result = await models.addSales(newSales);
  return result;
};

module.exports = addSales;