// Chạy: node seed.js  — xoá và nạp lại dữ liệu mẫu
require('dotenv').config({ path: __dirname + '/.env' });
const mongoose = require('mongoose');
const Product = require('./models/productModel');

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany({});
  await Product.insertMany([
    { name: 'Sample Women Top', price: 45, image: '/images/products/1.jpg', tag: 'new', type: 'new' },
    { name: 'Sample Men Shirt', price: 55, image: '/images/products/2.jpg', type: 'new' },
    { name: 'Sample Jacket', price: 120, image: '/images/products/3.jpg', tag: 'hot', type: 'top' },
    { name: 'Sample Shoes', price: 80, image: '/images/products/4.jpg', type: 'top' }
  ]);
  console.log('✅ Seeded');
  await mongoose.disconnect();
})();
