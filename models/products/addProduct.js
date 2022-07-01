const connection = require('../../helpers/connection');

const addProduct = async (name) => {
  const [row] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );
    console.log(row);
  const result = {
    id: row.insertId,
    name,
  };
  console.log(result);
  return result;
};

module.exports = addProduct;