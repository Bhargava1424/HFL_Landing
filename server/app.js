require('dotenv').config('');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const requestRouter = require('./routes/requestRoutes');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRouter);
app.use('/api/requests', requestRouter);
app.use('/api/users', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});