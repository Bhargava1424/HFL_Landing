const express = require('express');
const router = express.Router();
const { 
  createRequest, 
  getRequestById, 
  updateRequest,  
  uploadDocument,
  getRequests,
  getSignedUrl
} = require('../controllers/requestController');

router.post('/create', createRequest);  // No authentication for createRequest
router.get('/getRequests', getRequests); // Protected route
router.get('/getSignedUrl', getSignedUrl); // Protected route
router.get('/:requestId', getRequestById); // Protected route
router.put('/:requestId', updateRequest); // Protected route
router.post('/:requestId/upload', uploadDocument); // Protected route

module.exports = router;
