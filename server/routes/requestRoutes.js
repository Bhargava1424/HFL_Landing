const express = require('express');
const router = express.Router();
const { 
  createRequest, 
  getRequestById, // Assumed - Add if you need this
  updateRequest,  // Assumed - Add if you need this
  uploadDocument,
  getRequests,
  getSignedUrl
} = require('../controllers/requestController');
// const authenticateJWT = require('../middleware/auth'); // For protecting other routes 

router.post('/create', createRequest);  // No authentication for createRequest
router.get('/getRequests', getRequests); // Protected route
router.get('/getSignedUrl', getSignedUrl); // Protected route
router.get('/:requestId', getRequestById); // Protected route (example)
router.put('/:requestId', updateRequest); // Protected route (example)
router.post('/:requestId/upload', uploadDocument); // Protected route


module.exports = router; 