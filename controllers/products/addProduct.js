const services = require('../../services');
const { CREATED, INTERNAL_SERVER, BAD_REQUEST } = require('../../helpers/httpStatusCodes');

const addProduct = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name);
    const product = await services.addProduct(name);
    console.log(product);
    if (product.message) return res.status(BAD_REQUEST).send(product.message);

    res.status(CREATED).json(product);
  } catch (error) {
    res.status(INTERNAL_SERVER).json(`server error: ${error}`);
  }
};

module.exports = addProduct;