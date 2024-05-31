const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/userController'); 
const authenticateJWT = require('../middleware/auth');
const authenticateAdmin = require('../middleware/admin'); 

router.get('/', authenticateJWT, authenticateAdmin, getAllUsers); 

module.exports = router;
