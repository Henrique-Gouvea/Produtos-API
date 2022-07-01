const { OK, INTERNAL_SERVER } = require('../../helpers/httpStatusCodes');
const services = require('../../services');

const addSales = (res, req) => {
  try {
    const newSales = req.body;
    const sales = services.addSales(newSales);
    res.status(OK).json(sales);
  } catch (error) {
    res.status(INTERNAL_SERVER).json(`server error: ${error}`);
  }
};

module.exports = addSales;