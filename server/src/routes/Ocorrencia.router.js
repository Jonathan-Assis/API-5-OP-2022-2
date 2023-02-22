const router = require('express').Router();
const { OcorrenciaController } = require('../controllers');
const { handleToken } = require('../middleware');

router.post('/new', handleToken, OcorrenciaController.newOcorrencia);
router.post('/get', handleToken, OcorrenciaController.getOcorrencia);
router.get('/last', handleToken, OcorrenciaController.getLastOcorrencia);
router.put('/update', handleToken, OcorrenciaController.updateOcorrencia);
router.delete('/delete', handleToken, OcorrenciaController.deleteOcorrencia);

router.post('/addCategoria', handleToken, OcorrenciaController.newCategoria);
router.post('/getCategoria', handleToken, OcorrenciaController.getCategoria);

module.exports = router;