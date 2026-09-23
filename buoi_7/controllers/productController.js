// Đây là nơi chứa dữ liệu và logic xử lý
const products = [
	{ id: 1, name: 'Laptop', price: 1500 },
	{ id: 2, name: 'Điện thoại', price: 800 },
	{ id: 3, name: 'Tai nghe', price: 100 }
];

// Hàm hiển thị danh sách sản phẩm
exports.getProducts = (req, res) => {
	res.render('products', { products });
};

// Hàm hiển thị chi tiết sản phẩm
exports.getProductById = (req, res) => {
	const product = products.find(p => p.id == req.params.id);
	if (product) {
		res.send(`<h1>${product.name}</h1><p>Giá: $${product.price}</p>`);
	} else {
		res.send('<h1>Không tìm thấy sản phẩm</h1>');
	}
};
