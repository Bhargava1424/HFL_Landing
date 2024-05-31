const express = require('express');
const router = express.Router();
const { 
  createRequest, 
  getRequestById, // Assumed - Add if you need this
  updateRequest,  // Assumed - Add if you need this
  uploadDocument 
} = require('../controllers/requestController');
const authenticateJWT = require('../middleware/auth'); // For protecting other routes 

router.post('/create', createRequest);  // No authentication for createRequest
router.get('/:requestId', authenticateJWT, getRequestById); // Protected route (example)
router.put('/:requestId', authenticateJWT, updateRequest); // Protected route (example)
router.post('/:requestId/upload', uploadDocument); // Protected route

module.exports = router; 