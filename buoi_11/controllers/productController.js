const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.render('index', { products });
};

exports.showAddProductForm = (req, res) => res.render('add');

const isImageSrc = s => /^(https?:\/\/|\/)/.test(s);
const uploadedPath = file => `/uploads/${file.filename}`;

exports.addProduct = async (req, res) => {
  const image = req.file ? uploadedPath(req.file) : (req.body.imageUrl || '').trim();
  if (!isImageSrc(image)) return res.status(400).send('Vui lòng chọn hình ảnh hoặc nhập URL ảnh hợp lệ (http/https)');
  const { name, price, quantity } = req.body;
  await Product.create({ name, price, quantity, image });
  res.redirect('/');
};

exports.showEditProductForm = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('edit', { product });
};

exports.updateProduct = async (req, res) => {
  const { name, price, quantity } = req.body;
  const data = { name, price, quantity };
  const url = (req.body.imageUrl || '').trim();
  if (req.file) data.image = uploadedPath(req.file);
  else if (isImageSrc(url)) data.image = url;
  await Product.findByIdAndUpdate(req.params.id, data);
  res.redirect('/');
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect('/');
};

exports.showProductDetail = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('show', { product });
};

exports.searchProduct = async (req, res) => {
  const q = (req.query.q || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // escape regex
  const products = await Product.find({ name: { $regex: q, $options: 'i' } });
  res.render('index', { products, q: req.query.q });
};
