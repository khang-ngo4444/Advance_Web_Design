const mongoose = require('mongoose');
const Product = require('./models/Product'); // đường dẫn tới model Product

// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/shopdb')
.then(() => console.log('Đã kết nối MongoDB'))
.catch(err => console.error(err));

// Hàm tạo dữ liệu giả
function generateProducts(count) {
  const categories = ['Điện thoại', 'Laptop', 'Phụ kiện', 'Máy tính bảng', 'Âm thanh'];
  const products = [];

  for (let i = 0; i < count; i++) {
    const product = new Product({
      name: `Sản phẩm ${i + 1}`,
      price: Math.floor(Math.random() * 10000000) + 100000, // giá từ 100k đến ~10tr
      category: categories[Math.floor(Math.random() * categories.length)],
      stock: Math.floor(Math.random() * 100) + 1 // số lượng tồn kho từ 1-100
    });
    products.push(product);
  }

  return products;
}
// Seed dữ liệu
async function seed() {
  try {
    await Product.deleteMany(); // xóa dữ liệu cũ
    const products = generateProducts(100);
    await Product.insertMany(products);
    console.log('Seed thành công 100 sản phẩm');
  } catch (err) {
    console.error('Lỗi seed:', err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
