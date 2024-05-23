const express = require('express');
const router = express.Router();
const Request = require('../models/request');
const multer = require('multer');
const { Storage } = require('@google-cloud/storage');
const crypto = require('crypto');
const path = require('path');
const ocr = require('../utils/ocr'); 
const mongoose = require('mongoose');
const fs = require('fs');

// ... (other imports)

// MongoDB Connection 
const mongoURI = 'mongodb+srv://admin:eVBQQOvplo3wvwq6@cluster0.rqkwzyy.mongodb.net/HFL';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected')) 
.catch(err => console.log(err)); 

// Google Cloud Storage setup
const gc = new Storage({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID, // Use environment variable
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS // Use environment variable
}); 
const bucketName = '@google-cloud/storage'; // Your bucket name
const bucket = gc.bucket(bucketName);

// Multer storage configuration (for Google Cloud Storage) 
const storage = multer.memoryStorage(); // Store files in memory first
const upload = multer({ storage: storage });

// ... (Your existing code for request creation) 

// Handle document upload  
router.post('/requests/:requestId/upload', upload.single('file'), async (req, res) => {
  try {
    console.log('Upload request received:', req.body, req.params, req.file); // Log request details

    const requestId = req.params.requestId;
    const documentType = req.query.documentType; // Or get from req.body

    if (!req.file) {
      console.error('No file uploaded');
      return res.status(400).send('No file uploaded');
    }
   
    const blobName = `${crypto.randomUUID()}-${req.file.originalname}`; // Generate unique filename
    const blob = bucket.file(blobName); 
    const blobStream = blob.createWriteStream({ 
      metadata: { 
        contentType: req.file.mimetype 
      },
      resumable: false // For smaller files, you can set this to true 
    });

    blobStream.on('error', (err) => {
      console.error('Error uploading to GCS:', err);
      res.status(500).send('File upload failed');
    });

    blobStream.on('finish', async () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      console.log(`File uploaded to GCS: ${publicUrl}`);

      try {
        // Update the Request document in your MongoDB
        const request = await Request.findById(requestId); 
        if (!request) { 
          return res.status(404).send('Request not found'); 
        } 

        request.documents.push({
          type: documentType,
          file: publicUrl // Store the public URL in your database
        }); 

        await request.save();

        // OCR processing (example, adapt as needed)
        const ocrText = await ocr.extractText(publicUrl); // Assuming your OCR function can take a URL
        if (ocrText) {
          console.log('OCR Text:', ocrText);
          // ... Update the request document with OCR text in MongoDB
        } else {
          console.error('Error extracting text using OCR');
        }

        res.status(200).send({ message: 'File uploaded successfully', url: publicUrl });
      } catch (error) {
        console.error('Error updating request in database:', error);
        res.status(500).send('Failed to process file');
      } 
    }); 

    blobStream.end(req.file.buffer); 

  } catch (error) {
    console.error('Error during file upload:', error);
    res.status(500).send('File upload failed');
  }
});

// ... (Your existing routes)

module.exports = router;