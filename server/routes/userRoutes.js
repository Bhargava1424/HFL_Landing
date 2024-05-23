// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getAllUsers, getUser, updateUser, deleteUser } = require('../controllers/userController');
const authenticateJWT = require('../middleware/auth');
const authenticateAdmin = require('../middleware/admin');

// Get all users
router.get('/', authenticateJWT, authenticateAdmin, getAllUsers);

// Get a specific user
router.get('/:userId', authenticateJWT, getUser);

// Update a user
router.put('/:userId', authenticateJWT, authenticateAdmin, updateUser);

// Delete a user
router.delete('/:userId', authenticateJWT, authenticateAdmin, deleteUser);

module.exports = router;
