const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String, // vd: /images/products/1.jpg
  tag: String,   // "new", "hot"
  type: String   // "new" hoặc "top"
});

module.exports = mongoose.model('Product', productSchema);
