const services = require('../../services');
const { CREATED, INTERNAL_SERVER } = require('../../helpers/httpStatusCodes');

const addProduct = async (req, res) => {
  try {
    const { name } = req.params;
    const product = await services.getProduct(name);
    res.status(CREATED).json(product);
  } catch (error) {
    res.status(INTERNAL_SERVER).json(`server error: ${error}`);
  }
};

module.exports = addProduct;