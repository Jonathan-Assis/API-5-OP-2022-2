const router = require('express').Router();
const OcorrenciasController = require('../controllers');

router.post('/new', OcorrenciasController.newOcorrencia);
router.post('/get', OcorrenciasController.getCategoria);

//****//
router.post('/dev/addCat', OcorrenciasController.newCategoria);

module.exports = router;