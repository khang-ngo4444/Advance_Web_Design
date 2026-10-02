const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

async function getProductsByType(type) {
  const [rows] = await pool.query('SELECT * FROM products WHERE type = ?', [type]);
  return rows;
}

module.exports = { pool, getProductsByType };
