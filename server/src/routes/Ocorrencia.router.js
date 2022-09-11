const router = require('express').Router();
const { OcorrenciaController } = require('../controllers');

router.post('/new', OcorrenciaController.newOcorrencia);
router.post('/get', OcorrenciaController.getOcorrencia);
router.put('/update', OcorrenciaController.updateOcorrencia);
router.delete('/delete', OcorrenciaController.deleteOcorrencia);

router.post('/addCategoria', OcorrenciaController.newCategoria);
router.post('/getCategoria', OcorrenciaController.getCategoria);

module.exports = router;