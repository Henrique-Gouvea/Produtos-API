const { OK, NOT_FOUND } = require('../../helpers/httpStatusCodes');
const services = require('../../services');

const getSale = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await services.getSale(id);
    if (sale.length === 0) return res.status(NOT_FOUND).json({ message: 'Sale not found' });
    res.status(OK).json(sale);
  } catch (error) {
    return res.status(NOT_FOUND).json({ message: 'Sale not found' });
  }
};

module.exports = getSale;