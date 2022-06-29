const services = require('../../services');
const { OK, NOT_FOUND } = require('../../helpers/httpStatusCodes');

const getProduct = async (req, res) => {
  try {
    const product = await services.getProduct();
    return res.status(OK).json(product);
  } catch (error) {
    return res.status(NOT_FOUND).json('Product not found');
  }
};

module.exports = getProduct;