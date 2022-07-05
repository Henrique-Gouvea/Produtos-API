const models = require('../../models');

const getSale = async (id) => {
  const sale = await models.getSale(id);
  console.log(sale);
  if (!sale) return [];
  return sale;
};

module.exports = getSale;