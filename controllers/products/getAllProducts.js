const services = require('../../services');
const { OK } = require('../../helpers/httpStatusCodes');

const getAllProducts = async (req, res) => {
  try {
    const products = await services.getAllProducts();
    res.status(OK).json(products);
  } catch (error) {
    return res.status(OK).json([]);
  }
};

module.exports = getAllProducts;