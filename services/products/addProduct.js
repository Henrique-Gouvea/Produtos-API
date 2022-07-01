const schema = require('../../schemas');
const model = require('../../models');

const addProduct = async (name) => {
  const { error } = schema.productSchema(name);
  console.log(error.message);
  if (error) return { message: error.message };
  console.log(name);
  const product = await model.addProduct(name);
  console.log(`services ${product}`);
  return { id: product.insertId, name };
};

module.exports = addProduct;