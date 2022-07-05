const { OK } = require('../../helpers/httpStatusCodes');
const services = require('../../services');

const getAllSales = async (req, res) => {
  try {
    const sales = await services.getAllSales();
    res.status(OK).json(sales);
  } catch (error) {
    return res.status(OK).json([]);
  }
};

module.exports = getAllSales;