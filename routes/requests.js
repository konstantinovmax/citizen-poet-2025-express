const router = require('express').Router();
const { getRequests, createRequest, deleteRequest } = require('../controllers/requests');

router.get('/requests', getRequests);
router.post('/requests', createRequest);
router.delete('/requests/:requestId', deleteRequest);

module.exports = router;