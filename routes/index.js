var express = require('express');
var router = express.Router();

const product = require('../controllers/product');

/* GET home page. */
router.get('/', product.listadoBandas);
router.get('/bandas/detalle/:id', product.porID)
router.get('/bandas/genero/:genero', product.porGenero)



module.exports = router;
