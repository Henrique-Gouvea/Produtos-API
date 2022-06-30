const connection = require('../../helpers/connection');

const getAllProducts = async () => {
  console.log('model');
  const [rows] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id;',
    // 'SELECT * FROM products;',
  );
  console.log(rows);
  return rows;
};

module.exports = getAllProducts;