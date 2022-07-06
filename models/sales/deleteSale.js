const connection = require('../../helpers/connection');

const deleteSale = async (id) => {
  await connection.execute(
    'DELETE FROM sales WHERE id = ?', [id],
  );
  return true;
};

module.exports = deleteSale;