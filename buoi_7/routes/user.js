const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Danh sách người dùng');
});

router.get('/:id', (req, res) => {
	res.send(`Thông tin người dùng có ID: ${req.params.id}`);
});

router.post('/', (req, res) => {
	res.send('Tạo mới người dùng');
});

module.exports = router;
