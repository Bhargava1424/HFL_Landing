const authenticateAdmin = (req, res, next) => {
  if (req.user.role === 'admin') {
    next(); 
  } else {
    res.status(403).json({ message: 'Unauthorized: Admin privileges required' });
  }
};

module.exports = authenticateAdmin;