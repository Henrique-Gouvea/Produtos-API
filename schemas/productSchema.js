const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi
    .string()
    .required()
    .min(5)
    .messages({
      'string.min': '"name" length must be at least 5 characters long',
      'any.required': '"name" is required',
    }),
}).required();

module.exports = productSchema;