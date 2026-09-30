// models/productModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
});

const Product = mongoose.model('Product', productSchema, 'product'); // dùng collection tên 'product'

module.exports = Product;
