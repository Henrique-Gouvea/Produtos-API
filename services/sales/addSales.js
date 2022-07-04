const models = require('../../models');
const salesValidate = require('../../validate/salesValidate');

const addSales = async (newSales) => {
  console.log(newSales);
  const salesValid = await salesValidate(newSales);
  console.log(salesValid);
  if (salesValid.message) {
 return {
    message: salesValid.message,
    statusError: salesValid.statusError,
  }; 
}
  const result = await models.addSales(newSales);
  return result;
};

module.exports = addSales;

// 'number.min': '"productId" must be greater than or equal to 1',
//   'any.required': '"productId" is required',
//     }),

//     'number.min': '"quantity" must be greater than or equal to 1',
//     'any.required': '"quantity" is required',