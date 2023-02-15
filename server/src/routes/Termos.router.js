const router = require('express').Router();
const { TermosController } = require('../controllers');
const { handleToken } = require('../middleware');

router.post('/new', handleToken, TermosController.newTermo);
router.get('/get', handleToken, TermosController.getTermo);
router.get('/last', TermosController.getLastTermo);

module.exports = router;
