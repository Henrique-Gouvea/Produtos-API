const connect = require('../../helpers/connection');

const createSale = async () => {
  // console.log('entrou');
  const [row] = await connect.execute(
    // 'INSERT INTO sales (date) VALUES (NOW())',
    'INSERT INTO StoreManager.sales () VALUES ();',
  );
  // console.log(row.insertId);
  return { id: row.insertId };
};

module.exports = createSale;