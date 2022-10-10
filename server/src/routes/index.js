const router = require('express').Router();
const Ocorrencia = require('./Ocorrencia.router');
const Cidadao = require('./Cidadao.router');
const Termos = require('./Termos.router')

router.use('/ocorrencia', Ocorrencia);
router.use('/cidadao', Cidadao);
router.use('/termos', Termos);

module.exports = router;