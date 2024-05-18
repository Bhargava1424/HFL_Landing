const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const uri = "mongodb+srv://admin:eVBQQOvplo3wvwq6@cluster0.rqkwzyy.mongodb.net/SAT";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  registrationTime: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

router.post('/user', async (req, res) => {
  const { username } = req.body;
  try {
    const newUser = new User({ username });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', registrationTime: newUser.registrationTime });
  } catch (error) {
    res.status(400).json({ message: 'Error registering user', error });
  }
});

module.exports = router;

router.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users', error });
    }
  });
  