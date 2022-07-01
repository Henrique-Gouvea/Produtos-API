const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi
    .string()
    .required()
    .min(3)
    .messages({
      'string.min': 'O "name" deve ter pelo menos 3 caracteres',
      'any.required': 'O campo "name" é obrigatório',
    }),
}).required();

module.exports = productSchema;