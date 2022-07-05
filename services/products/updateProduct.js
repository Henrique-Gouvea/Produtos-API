const models = require('../../models');

const updateProduct = async (id, name) => {
  const product = await models.updateProduct(id, name);
  if (product !== 1) return [];
  return { id, name };
};

module.exports = updateProduct;