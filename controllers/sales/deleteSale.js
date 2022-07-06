const { NOT_FOUND, NO_CONTENT } = require('../../helpers/httpStatusCodes');
const services = require('../../services');

const deleteSale = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await services.deleteSale(id);
    res.status(NO_CONTENT).json();
  } catch (error) {
    res.status(NOT_FOUND).json({ message: 'Sale not found' });
  }
};

module.exports = deleteSale;