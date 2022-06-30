const services = require('../../services');
const { OK, NOT_FOUND, INTERNAL_SERVER } = require('../../helpers/httpStatusCodes');

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await services.getProduct(id);
    if (product.length === 0) return res.status(NOT_FOUND).json({ message: 'Product not found' });
    return res.status(OK).json(product);
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: 'Error getting' });
  }
};

module.exports = getProduct;