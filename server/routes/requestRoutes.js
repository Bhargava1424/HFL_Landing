const express = require('express');
const router = express.Router();
const { createRequest, getRequestById, updateRequest } = require('../controllers/requestController');
const authenticateJWT = require('../middleware/auth');

// Create new request
router.post('/create', authenticateJWT, createRequest);
router.get('/:requestId', authenticateJWT, getRequestById);
router.put('/:requestId', authenticateJWT, updateRequest);

// Implement other routes for getting, updating, deleting, etc.

module.exports = router;
