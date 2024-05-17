const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const uploadRoutes = require('./routes/upload'); // Correctly require upload routes
const app = express();

// Enable CORS
app.use(cors());

// Connect to MongoDB Atlas
const mongoURI = 'mongodb+srv://admin:eVBQQOvplo3wvwq6@cluster0.rqkwzyy.mongodb.net/9erpTest?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Use Routes
app.use('/api', uploadRoutes); // Prefix routes with /api

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
