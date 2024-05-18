const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const crypto = require('crypto');
const path = require('path');

// MongoDB Atlas URI
const mongoURI = 'mongodb+srv://admin:eVBQQOvplo3wvwq6@cluster0.rqkwzyy.mongodb.net/SAT?retryWrites=true&w=majority';

// Create mongo connection
const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Init gfs
let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
  console.log('GridFS stream initialized');
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

const router = express.Router();

// Test endpoint
router.get('/test', (req, res) => {
  res.send('API is working');
});

router.post('/upload', upload.single('file'), (req, res, next) => {
  console.log('Received upload request');
  try {
    if (!req.file) {
      console.log('No file uploaded');
      throw new Error('File not uploaded');
    }
    console.log('File uploaded successfully:', req.file);
    res.status(201).send({ file: req.file });
  } catch (error) {
    console.error('Error during file upload:', error.message);
    next(error);
  }
});

router.get('/file/:filename', (req, res, next) => {
  try {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
      if (err) {
        throw err;
      }
      if (!file || file.length === 0) {
        return res.status(404).json({ err: 'No file exists' });
      }
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    });
  } catch (error) {
    console.error('Error during file retrieval:', error.message);
    next(error);
  }
});

router.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).send('Something broke!');
});

module.exports = router;
