require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const path = require('path');
const { pool } = require('./models/productModel');
const routes = require('./routes/index');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '..', 'public'))); // public dùng chung cho 2 bản

pool.query('SELECT 1')
  .then(() => console.log('✅ MySQL connected'))
  .catch(err => console.error('❌ MySQL error:', err.message));

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server chạy tại http://localhost:${PORT}`));
