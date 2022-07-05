const connection = require('../../helpers/connection');

const deleteProduct = async (id) => {
  await connection.execute(
    'DELETE FROM products WHERE id = ?', [id],
  );
  return true;
};

module.exports = deleteProduct;