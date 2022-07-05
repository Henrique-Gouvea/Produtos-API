const models = require('../../models');
const schema = require('../../schemas');

const updateProduct = async (id, name) => {
  const { error } = schema.productSchema.validate({ name });
  if (error) return { message: error.message };

  const verifyProduct = await models.getProduct(id);
  if (!verifyProduct) return [];

  const product = await models.updateProduct(id, name);
  if (product !== 1) return [];

  return { id, name };
};

module.exports = updateProduct;