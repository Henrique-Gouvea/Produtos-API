const models = require('../../models');
const salesValidate = require('../../validate/salesValidate');
const { NOT_FOUND } = require('../../helpers/httpStatusCodes');

const addSales = async (newSales) => {
  const salesValid = await salesValidate(newSales);

  if (salesValid) {
    return {
     message: salesValid.message,
     statusError: salesValid.statusError,
    }; 
  }

  const allProducts = await models.getAllProducts();
  let noHaveProduct = false;

  newSales.forEach((sales) => {
    if (!allProducts.some((product) => product.id === sales.productId)) {
      noHaveProduct = true;
    }
  });
  
  if (noHaveProduct) return { message: 'Product not found', statusError: NOT_FOUND };
  
  const result = await models.addSales(newSales);
  return result;
};

module.exports = addSales;

// 'number.min': '"productId" must be greater than or equal to 1',
//   'any.required': '"productId" is required',
//     }),

//     'number.min': '"quantity" must be greater than or equal to 1',
//     'any.required': '"quantity" is required',