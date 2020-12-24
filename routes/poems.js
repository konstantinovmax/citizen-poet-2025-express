const router = require('express').Router();
const { getPoems } = require('../controllers/poems');

router.get('/poems', getPoems);

module.exports = router;