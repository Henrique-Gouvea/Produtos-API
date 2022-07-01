const schema = require('../../schemas');
const model = require('../../models');

const addProduct = async (name) => {
  const { error } = schema.productSchema(name);
  if (error) return { message: error.message };

  const product = await model.addProduct(name);
  return { id: product.insertId, name };
};

module.exports = addProduct;