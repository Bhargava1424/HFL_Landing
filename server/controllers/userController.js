const User = require('../models/User');

// Get all users (only for admins)
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

// Get a specific user
const getUser = async (req, res) => {
  // ... (Implementation similar to getAllUsers)
};

// Update a user (e.g., role, password)
const updateUser = async (req, res) => {
  // ... (Implementation for updating user details)
};

// Delete a user
const deleteUser = async (req, res) => {
  // ... (Implementation for deleting a user)
};

module.exports = { getAllUsers, getUser, updateUser, deleteUser };
