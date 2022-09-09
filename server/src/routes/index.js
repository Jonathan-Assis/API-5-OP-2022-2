const router = require('express').Router();
const Ocorrencia = require('./Ocorrencia.router');
const Cidadao = require('./Cidadao.router');

router.use('/ocorrencia', Ocorrencia);
router.use('/cidadao', Cidadao);

module.exports = router;