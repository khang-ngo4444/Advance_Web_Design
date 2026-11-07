const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productController');

router.get('/', productCtrl.index);

// '/new' đặt trước '/:id', nếu không 'new' sẽ bị hiểu là id
router.get('/new', productCtrl.newForm);
router.post('/', productCtrl.create);

router.get('/edit/:id', productCtrl.editForm);
router.post('/edit/:id', productCtrl.update);

router.get('/delete/:id', productCtrl.delete);

router.get('/:id', productCtrl.detail);

module.exports = router;
