const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// User registration
router.post('/register', register);

// User login
router.post('/login', login);

// ... (Other routes as needed)

module.exports = router;
