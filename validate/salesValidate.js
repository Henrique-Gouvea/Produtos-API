const schemas = require('../schemas');
const { UNPROCESSABLE_ENTITY, BAD_REQUEST } = require('../helpers/httpStatusCodes');

const verifyError = (error) => {
  if ((error.message === '"quantity" must be greater than or equal to 1')) {
    return UNPROCESSABLE_ENTITY;
  } return BAD_REQUEST;
};

const salesValidate = (newSales) => {
  console.log(newSales);
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
};

module.exports = salesValidate;