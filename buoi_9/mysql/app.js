require('dotenv').config(); // đọc thông tin DB từ .env
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const productRoutes = require('./routes/productRoutes');

// Thiết lập EJS làm template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/../public')); // CSS dùng chung

// Sử dụng định tuyến sản phẩm
app.use('/api', productRoutes);

// Lắng nghe cổng
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
