const models = require('../../models');
const getSale = require('./getSale');

const deleteSale = async (id) => {
  const haveInDB = await getSale(id);
  console.log(haveInDB);
  const result = await models.deleteSale(id);
  if (!result || haveInDB.length === 0) return [];
  return result;
};

module.exports = deleteSale;