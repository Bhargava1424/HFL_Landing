const User = require('../models/User');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Exclude password from results
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

module.exports = { getAllUsers };