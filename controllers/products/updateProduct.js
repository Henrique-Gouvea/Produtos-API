const services = require('../../services');
const { OK, NOT_FOUND } = require('../../helpers/httpStatusCodes');

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const productUpdated = await services.updateProduct(id, name);
    console.log(productUpdated);
    if (productUpdated.length === 0) return res.status(NOT_FOUND).json({ message: 'Product not found' });
    res.status(OK).json(productUpdated);
  } catch (error) {
    return res.status(NOT_FOUND).json({ message: 'Product not found' });
  }
};

module.exports = updateProduct;