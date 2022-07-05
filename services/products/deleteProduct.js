const models = require('../../models');

const deleteProduct = async (id) => {
  console.log(id);
  const result = await models.deleteProduct(id);
  console.log(`result${result}`);
  if (!result) return [];
  return result;
};

module.exports = deleteProduct;