const models = require('../../models');

const deleteProduct = async (id, name) => {
  const product = await models.deleteProduct(id, name);
  if (product !== 1) return [];
  return { id, name };
};

module.exports = deleteProduct;