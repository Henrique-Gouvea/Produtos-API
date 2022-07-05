const connection = require('../../helpers/connection');

const updateProduct = async (id, name) => {
  const [result] = await connection.execute(
    `UPDATE StoreManager.products 
    SET name = (?)
    WHERE id = (?);`,
    [name, id],
  );
  console.log(result.affectedRows);
  return result.affectedRows;
};

module.exports = updateProduct;