const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const requestsRoute = require('./routes/requests'); // Correct the path 

const app = express();
const port = 5000;

// MongoDB Connection 
mongoose.connect('mongodb+srv://admin:eVBQQOvplo3wvwq6@cluster0.rqkwzyy.mongodb.net/HFL', { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());
app.use('/api', requestsRoute); // Include requests route

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 