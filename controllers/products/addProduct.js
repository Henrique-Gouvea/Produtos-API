const services = require('../../services');
const { CREATED,
  INTERNAL_SERVER,
  BAD_REQUEST,
  UNPROCESSABLE_ENTITY,
} = require('../../helpers/httpStatusCodes');

const addProduct = async (req, res) => {
  try {
    const { name } = req.body;
    const product = await services.addProduct(name);

    if (product.message) {
 return res.status(
      product.message === '"name" is required' ? BAD_REQUEST : UNPROCESSABLE_ENTITY,
 ).send({ message: product.message }); 
}
    if (product.message) return res.status(BAD_REQUEST).send(product.message);

    res.status(CREATED).json(product);
  } catch (error) {
    res.status(INTERNAL_SERVER).json(`server error: ${error}`);
  }
};

module.exports = addProduct;