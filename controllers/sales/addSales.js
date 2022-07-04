const { OK, INTERNAL_SERVER, BAD_REQUEST } = require('../../helpers/httpStatusCodes');
const services = require('../../services');

const addSales = async (req, res) => {
  try {
    const newSales = req.body;
    console.log(req.body);
    if (newSales.length === 0) {
      return res.status(BAD_REQUEST)
      .json('Add one Product and quantity'); 
    }

    const sales = await services.addSales(newSales);
    console.log(sales);
    if (sales.message) {
      return res.status(sales.statusError).send({ message: sales.message });
    } 

    return res.status(OK).json(sales);
  } catch (error) {
    res.status(INTERNAL_SERVER).json(`server error: ${error}`);
  }
};

module.exports = addSales;