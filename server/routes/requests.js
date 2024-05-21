const express = require('express');
const router = express.Router();
const Request = require('../models/request');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const crypto = require('crypto');
const path = require('path');
const ocr = require('../utils/ocr');

// MongoDB Connection - get a reference to the database
const mongoURI = 'mongodb://localhost:27017/your-database-name'; 
const conn = mongoose.createConnection(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Init gfs 
let gfs; 

conn.once('open', () => { 
  gfs = Grid(conn.db, mongoose.mongo); 
  gfs.collection('uploads'); // Make sure you have the 'uploads' bucket
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI, 
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
  }
});

const upload = multer({ storage }); 

// Create new request 
router.post('/create-request', async (req, res) => {
  try {
    const newRequest = new Request(req.body);
    await newRequest.save();
    res.status(201).json({ message: 'Request created successfully', requestId: newRequest._id });
  } catch (error) {
    res.status(400).json({ message: 'Error creating request', error: error.message });
  }
});

// Handle document upload 
router.post('/requests/:requestId/upload', upload.single('file'), async (req, res) => { 
  try {
    const requestId = req.params.requestId;
    const request = await Request.findById(requestId);

    if (!req.file) {
      throw new Error('File not uploaded');
    }

    // Assuming you are sending documentType as a query parameter (or you can modify to use body) 
    const documentType = req.query.documentType;

    // Update document in Request 
    request.documents.push({
      type: documentType,
      file: req.file.filename 
    }); 

    await request.save();

    // Call OCR (asynchronous) 
    const ocrText = await ocr.extractText(req.file.filename); // Get extracted text
    if (ocrText) {
      await Request.findByIdAndUpdate(requestId, { 
        $push: {
          "documents.$.ocrText": ocrText 
        } 
      }); 
    } else {
      console.error('Error extracting text using OCR');
    } 

    res.status(200).send({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error('Error during file upload:', error.message); 
    res.status(500).send('File upload failed'); 
  } 
});

// ... (Other routes - Get OCR extracted text, Extract data, etc.) 

module.exports = router; 