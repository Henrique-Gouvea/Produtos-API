const connection = require('../../helpers/connection');

const getAllSales = async () => {
  const [rows] = await connection.execute(
    `SELECT sp.sale_id AS saleId, 
      sp.product_id AS productId, 
      sp.quantity AS quantity, 
      s.date AS date 
      FROM StoreManager.sales_products AS sp 
      INNER JOIN StoreManager.sales AS s 
      ON sp.sale_id = s.id 
      ORDER BY saleId, productId; `,
  );
  return rows;
};

module.exports = getAllSales;