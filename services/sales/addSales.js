const models = require('../../models');
const salesValidate = require('../../validate/salesValidate');

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
    .map((newSale) => models.addSales(newSale)));

  return {
    id,
    itemsSold: [...newSales],
  };
};

module.exports = addSales;

// 'number.min': '"productId" must be greater than or equal to 1',
//   'any.required': '"productId" is required',
//     }),

//     'number.min': '"quantity" must be greater than or equal to 1',
//     'any.required': '"quantity" is required',