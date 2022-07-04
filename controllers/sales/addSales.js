const { OK, INTERNAL_SERVER, BAD_REQUEST } = require('../../helpers/httpStatusCodes');
const services = require('../../services');

const addSales = (res, req) => {
  try {
    const newSales = req.body;
    if (newSales.length === 0) {
      return res.status(BAD_REQUEST)
      .json('Add one Product and quantity'); 
    }
    const sales = services.addSales(newSales);
    res.status(OK).json(sales);
  } catch (error) {
    res.status(INTERNAL_SERVER).json(`server error: ${error}`);
  }
};

module.exports = addSales;