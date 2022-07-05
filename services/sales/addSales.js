const models = require('../../models');
const { salesValidate } = require('../../validate/salesValidate');

const addSales = async (newSales) => {
  const salesValid = await salesValidate(newSales);

  if (salesValid) {
    return {
      message: salesValid.message,
      statusError: salesValid.statusError,
    };
  }

  const { id } = await models.createSale();

  await Promise.all(newSales
    .map((newSale) => models.addSales(newSale.productId, newSale.quantity, id)));

  return {
    id,
    itemsSold: [...newSales],
  };
};

module.exports = addSales;