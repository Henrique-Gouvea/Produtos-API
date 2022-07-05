const models = require('../../models');

const updateProduct = async (id) => {
  const product = await models.updateProduct(id);
  if (!product) return [];
  return product;
};

module.exports = updateProduct;