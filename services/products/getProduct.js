const models = require('../../models');

const getProduct = async (id) => {
  const product = await models.getProduct(id);
  if (!product) return [];
  return product;
};

module.exports = getProduct;