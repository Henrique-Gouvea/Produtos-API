const connect = require('../../helpers/connection');

const createSale = async () => {
  const [row] = await connect.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW());',
  );
  return { id: row.insertId };
};

module.exports = createSale;