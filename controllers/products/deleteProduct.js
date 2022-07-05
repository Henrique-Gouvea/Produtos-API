const services = require('../../services');
const { NO_CONTENT, NOT_FOUND } = require('../../helpers/httpStatusCodes');

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await services.deleteProduct(id);
    if (result.length === 0) return res.status(NOT_FOUND).json({ message: 'Product not found' });
    res.status(NO_CONTENT).json();
  } catch (error) {
    return res.status(NOT_FOUND).json({ message: 'Product not found' });
  }
};

module.exports = deleteProduct;