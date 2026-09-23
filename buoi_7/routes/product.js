const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route GET: danh sách sản phẩm
router.get('/', productController.getProducts);

// Route GET: chi tiết sản phẩm theo ID
router.get('/:id', productController.getProductById);

module.exports = router;
