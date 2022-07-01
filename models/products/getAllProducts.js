const connection = require('../../helpers/connection');

const getAllProducts = async () => {
  const [rows] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id;',
  );
  return rows;
};

module.exports = getAllProducts;