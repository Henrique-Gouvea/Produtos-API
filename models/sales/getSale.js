const connection = require('../../helpers/connection');

const getProduct = async (id) => {
  const [row] = await connection.execute(
    `SELECT sp.product_id AS productId,
      sp.quantity AS quantity,
      s.date AS date
      FROM StoreManager.sales_products AS sp
      INNER JOIN StoreManager.sales AS s 
      ON sp.sale_id = s.id
      WHERE sp.sale_id = (?)
      ORDER BY productId;`, [id],
  );
  return row;
};

module.exports = getProduct;