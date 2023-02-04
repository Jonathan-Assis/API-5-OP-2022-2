const router = require('express').Router();
const { CidadaoController } = require('../controllers');
const { handleToken } = require('../middleware');

router.post('/cadastro', CidadaoController.newCidadao);
router.post('/validar', CidadaoController.validar);
router.post('/login', CidadaoController.login);
router.post('/get', handleToken, CidadaoController.getCidadao);
router.put('/update', handleToken, CidadaoController.updateCidadao);
router.delete('/delete', handleToken, CidadaoController.deleteCidadao);

module.exports = router;