const router = require('express').Router();
const { CidadaoController } = require('../controllers');

router.post('/cadastro', CidadaoController.newCidadao);
router.post('/login', CidadaoController.login);

module.exports = router;