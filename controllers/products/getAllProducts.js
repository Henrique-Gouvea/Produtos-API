const services = require('../../services');
const { OK } = require('../../helpers/httpStatusCodes');

const getAllProducts = async (req, res) => {
  try {
    const products = await services.getAllProducts();
    console.log(`controlller: ${products}`);
    res.status(OK).json(products);
  } catch (error) {
    return res.status(OK).json([]);
  }
};

module.exports = getAllProducts;