const router = require('express').Router();
const { ListUsers } = require('../controllers');

router.get('/', ListUsers.genList);

module.exports = router;