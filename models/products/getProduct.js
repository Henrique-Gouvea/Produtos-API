const connection = require('../../helpers/connection');

const getProduct = async (id) => {
  const [row] = await connection.execute(
    'SELECT * FROM products WHERE id = ?', [id],
  );
  return row;
};

module.exports = getProduct;