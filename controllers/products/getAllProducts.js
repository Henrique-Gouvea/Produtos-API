const services = require('../../services');
const { OK, BAD_REQUEST } = require('../../helpers/httpStatusCodes');

const getAllProducts = async (req, res) => {
  try {
    const products = await services.getAllProducts();
    return res.status(OK).json(products);
  } catch (error) {
    return res.status(BAD_REQUEST).json([]);
  }
};

module.exports = getAllProducts;