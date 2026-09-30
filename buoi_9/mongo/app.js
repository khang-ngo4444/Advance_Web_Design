// app.js
require('dotenv').config(); // đọc MONGO_URI từ .env
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3000;

// Kết nối tới MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

// Cấu hình middleware
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/../public')); // Để phục vụ tệp tĩnh (CSS dùng chung)

// Sử dụng routes
app.use('/products', productRoutes);

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
