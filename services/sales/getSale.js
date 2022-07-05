const models = require('../../models');

const getSale = async (id) => {
  const sale = await models.getSale(id);
  if (!sale) return [];
  return sale;
};

module.exports = getSale;