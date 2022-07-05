const services = require('../../services');
const { OK, NOT_FOUND } = require('../../helpers/httpStatusCodes');

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [product] = await services.updateProduct(id);
    if (product.length === 0) return res.status(NOT_FOUND).json({ message: 'Product not found' });
    res.status(OK).json(product);
  } catch (error) {
    return res.status(NOT_FOUND).json({ message: 'Product not found' });
  }
};

module.exports = updateProduct;