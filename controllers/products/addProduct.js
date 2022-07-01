const services = require('../../services');
const { CREATED, INTERNAL_SERVER, BAD_REQUEST } = require('../../helpers/httpStatusCodes');

const addProduct = async (req, res) => {
  try {
    const { name } = req.params;
    const product = await services.getProduct(name);

    if (product.message) return res.status(BAD_REQUEST).send(product.message);

    res.status(CREATED).json(product);
  } catch (error) {
    res.status(INTERNAL_SERVER).json(`server error: ${error}`);
  }
};

module.exports = addProduct;