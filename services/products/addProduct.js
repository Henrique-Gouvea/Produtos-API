const schema = require('../../schemas');
const model = require('../../models');

const addProduct = async (name) => {
  const { error } = schema.productSchema.validate({ name });
  if (error) return { message: error.message };
  const product = await model.addProduct(name);
  return product;
};

module.exports = addProduct;