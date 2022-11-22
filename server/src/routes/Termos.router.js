const router = require('express').Router();
const { TermosController } = require('../controllers');

router.post('/new', TermosController.newTermo);

module.exports = router;
