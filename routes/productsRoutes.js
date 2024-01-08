const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/products', ctrl.products.index);
router.get('/products/:category', ctrl.products.indexByCategory);
router.get('/products/:id', ctrl.products.show);
router.post('/new-product', ctrl.products.create);
router.put('/products/:id/edit-product', ctrl.products.update);
router.delete('/products/:id/remove-product', ctrl.products.destroy);

module.exports = router;