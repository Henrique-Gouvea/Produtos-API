const models = require('../../models');
const { verifyHaveProductDB } = require('../../validate/salesValidate');

const deleteProduct = async (id) => {
  const haveInDB = await verifyHaveProductDB([{ productId: Number(id) }]);
  const result = await models.deleteProduct(id);
  console.log(haveInDB);
  if (!result || haveInDB) return [];
  console.log('teste');
  return result;
};

module.exports = deleteProduct;