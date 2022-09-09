const router = require('express').Router();
const { OcorrenciaController } = require('../controllers');

router.post('/new', OcorrenciaController.newOcorrencia);
router.post('/dev/addCategoria', OcorrenciaController.newCategoria);

router.post('/getCategoria', OcorrenciaController.getCategoria);

module.exports = router;