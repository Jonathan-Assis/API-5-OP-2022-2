const router = require('express').Router();
const Ocorrencia = require('./Ocorrencia.router');
const Cidadao = require('./Cidadao.router');
const Termos = require('./Termos.router')
const Logs = require('./Logs.router');

router.use('/ocorrencia', Ocorrencia);
router.use('/cidadao', Cidadao);
router.use('/termos', Termos);
router.use('/', Logs);

module.exports = router;