-- Chạy file này trong MySQL Workbench (File > Open SQL Script > Execute ⚡)
CREATE DATABASE IF NOT EXISTS shopdb CHARACTER SET utf8mb4;
USE shopdb;

DROP TABLE IF EXISTS products;
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image VARCHAR(255) NULL,            -- vd: /images/products/1.jpg
  tag VARCHAR(50) NULL,               -- 'new', 'hot' hoặc NULL
  type ENUM('new','top') NOT NULL     -- khu vực hiển thị
);

INSERT INTO products (name, price, image, tag, type) VALUES
('Sample Women Top', 45,  '/images/products/1.jpg', 'new', 'new'),
('Sample Men Shirt', 55,  '/images/products/2.jpg', NULL,  'new'),
('Sample Jacket',    120, '/images/products/3.jpg', 'hot', 'top'),
('Sample Shoes',     80,  '/images/products/4.jpg', NULL,  'top');
