const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); 
const authRoutes = require('./routes/authRoutes'); 
const requestRoutes = require('./routes/requestRoutes');
const userRoutes = require('./routes/userRoutes'); 
require('dotenv').config({ path: '../env/.env' });

const app = express();
const PORT = process.env.PORT || 5000; 

// Connect to database
connectDB();

app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


// Use the routes
app.use('/api/auth', authRoutes);
app.use('/api/requests', requestRoutes); 
app.use('/api/users', userRoutes); 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));