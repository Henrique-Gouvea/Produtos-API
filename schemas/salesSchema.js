const Joi = require('joi');

const salesSchema = Joi.object({
  productId: Joi
    .number()
    .min(1)
    .required()
    .messages({
      'number.min': '"productId" must be greater than or equal to 1',
      'any.required': '"productId" is required',
    }),
  quantity: Joi
    .number()
    .min(1)
    .required()
    .messages({
      'number.min': '"quantity" must be greater than or equal to 1',
      'any.required': '"quantity" is required',
    }),

});

module.exports = salesSchema;
