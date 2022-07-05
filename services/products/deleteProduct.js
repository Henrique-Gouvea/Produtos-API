const models = require('../../models');
const { verifyHaveProductDB } = require('../../validate/salesValidate');

const deleteProduct = async (id) => {
  const haveInDB = await verifyHaveProductDB([{ productId: Number(id) }]);
  const result = await models.deleteProduct(id);
  if (!result || haveInDB) return [];
  return result;
};

module.exports = deleteProduct;