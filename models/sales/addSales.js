const connect = require('../../helpers/connection');

const addSales = async ({ saleId, productId, quantity }) => {
  const [rows] = connect.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)VALUES (?, ?, ?);',
    [saleId, productId, quantity],
  );
  return rows.insertId;
};

module.exports = addSales;