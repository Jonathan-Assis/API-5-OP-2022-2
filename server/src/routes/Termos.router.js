const router = require('express').Router();
const { TermosController } = require('../controllers');
const { handleToken } = require('../middleware');

router.get('/last', TermosController.getLastTermo);
router.post('/new', handleToken, TermosController.newTermo);
router.get('/get', handleToken, TermosController.getTermo);
router.post('/compair', TermosController.compairTermo);

module.exports = router;
