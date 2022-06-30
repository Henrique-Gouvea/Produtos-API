const models = require('../../models');

const getAllProducts = async () => {
  const result = await models.getAllProducts();
  console.log(`service: ${result}`);
  // if (!result) return [];
  return result;
};

module.exports = getAllProducts;