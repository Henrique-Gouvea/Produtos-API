const models = require('../../models');

const getProduct = async (id) => {
  const product = await models.getProduct(id);
  return product;
};

module.exports = getProduct;