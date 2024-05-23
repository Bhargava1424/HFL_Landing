// server/middleware/admin.js
const User = require('../models/User');

const authenticateAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);
    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized: Admin privileges required' });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: 'Error checking admin role', error: error.message });
  }
};

module.exports = authenticateAdmin;