const router = require('express').Router();
const { CidadaoController } = require('../controllers');

router.post('/cadastro', CidadaoController.newCidadao);
router.post('/validar', CidadaoController.validar);
router.post('/login', CidadaoController.login);
router.post('/get', CidadaoController.getCidadao);
router.put('/update', CidadaoController.updateCidadao);
router.delete('/delete', CidadaoController.deleteCidadao);

module.exports = router;