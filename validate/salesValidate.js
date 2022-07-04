const schemas = require('../schemas');
const { UNPROCESSABLE_ENTITY, BAD_REQUEST, NOT_FOUND } = require('../helpers/httpStatusCodes');
const models = require('../models');

const verifyError = (error) => {
  if ((error.message === '"quantity" must be greater than or equal to 1')) {
    return UNPROCESSABLE_ENTITY;
  } return BAD_REQUEST;
};

const verifyHaveProductDB = async (newSales) => {
  const allProducts = await models.getAllProducts();
  let noHaveProduct = false;
  console.log(newSales);
  newSales.forEach((sales) => {
    if (!allProducts.some((product) => product.id === sales.productId)) {
      noHaveProduct = true;
    }
  });
  console.log(noHaveProduct);
  if (noHaveProduct) return { message: 'Product not found', statusError: NOT_FOUND };
};

const salesValidate = (newSales) => {
  let message = '';
  let statusError = '';
  newSales.forEach((sale) => {
    const { error } = schemas.salesSchema.validate(sale);
    if (error) {
      message = error.message;
      statusError = verifyError(error);
    }
  });

  if (message) return { message, statusError };
  
  const haveProduct = verifyHaveProductDB(newSales);

  if (haveProduct.message) {
    return {
     message: haveProduct.message, statusError: haveProduct.statusError,
    }; 
  }
};

module.exports = salesValidate;