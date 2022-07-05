const connection = require('../../helpers/connection');

const getAllSales = async () => {
  const [rows] = await connection.execute(
    'SELECT * FROM StoreManager.sales ORDER BY id;',
  );
  return rows;
};

module.exports = getAllSales;