const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// phục vụ static files
app.use(express.static(path.join(__dirname, 'public')));

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server chạy tại http://localhost:${process.env.PORT}`)
);
