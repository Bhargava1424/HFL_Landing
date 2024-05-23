const Request = require('../models/Request');
const User = require('../models/User');
const formidable = require('formidable');
const ocr = require('../utils/ocr'); // Your OCR function
const { Storage } = require('@google-cloud/storage');
const storage = new Storage(); // Initialize Google Cloud Storage

const createRequest = async (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: 'Error parsing form data', error: err.message });
    }

    const { name, phoneNumber, email, amount, currency } = fields;
    const document = files.document;

    try {
      // Upload the document to Cloudinary (or your preferred storage)
      const uploadResult = await cloudinary.uploader.upload(document.path, {
        folder: 'forex-requests', // Define folder for uploaded files
      });

      // Perform OCR
      const ocrData = await ocr.extractText(uploadResult.secure_url);

      const newRequest = new Request({
        name,
        phoneNumber,
        email,
        amount: parseFloat(amount), // Convert to number
        currency,
        userId: req.user.id, // Attach the logged-in user's ID
        document: uploadResult.secure_url, // Store Cloudinary URL
        ocrData, // Store extracted OCR data
      });
      await newRequest.save();
      res.status(201).json({ message: 'Request created successfully', requestId: newRequest._id });
    } catch (error) {
      res.status(500).json({ message: 'Error creating request', error: error.message });
    }
  });
};

const extractData = (ocrText) => {
    const extracted = {};
    // Example for a document type (e.g., passport)
    const nameMatch = ocrText.match(/Name\s*:\s*([^\n]+)/);
    if (nameMatch) {
      extracted.name = nameMatch[1].trim();
    }
    // ... Add more extraction logic for other document types and fields
    return extracted;
  };
  
  // Inside the createRequest function
  const newRequest = new Request({
    // ... other fields
    ocrData: extractData(ocrData), // Extract data from OCR
  });

// Implement other request management controllers (get, update, delete, etc.)
const getRequestById = async (req, res) => {
  const requestId = req.params.requestId;
  try {
    const request = await Request.findById(requestId).populate('userId');
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching request', error: error.message });
  }
};

const updateRequest = async (req, res) => {
  const requestId = req.params.requestId;
  const { status } = req.body;

  try {
    const request = await Request.findByIdAndUpdate(requestId, { status }, { new: true });
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ message: 'Error updating request', error: error.message });
  }
};

const uploadDocument = async (req, res) => {
  const requestId = req.params.requestId;
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: 'Error parsing form data', error: err.message });
    }

    const document = files.document;
    const type = fields.type;

    try {
      const bucket = storage.bucket(process.env.GOOGLE_CLOUD_BUCKET_NAME); // Get your bucket instance
      const file = bucket.file(`${requestId}/${type}-${Date.now()}-${document.originalFilename}`); // Generate a unique file name

      // Upload the file to GCS
      await file.save(document.path); // Use the file's path from the request

      const publicUrl = `https://storage.googleapis.com/${process.env.GOOGLE_CLOUD_BUCKET_NAME}/${file.name}`; // Generate public URL

      const ocrData = await ocr.extractText(publicUrl, type); 

      const request = await Request.findById(requestId);
      if (!request) {
        return res.status(404).json({ message: 'Request not found' });
      }

      request.documents.push({
        type,
        file: publicUrl, // Store GCS URL
        ocrText: ocrData.ocrText,
        extractedData: ocrData.extractedData
      });

      await request.save();
      res.status(200).json({ message: 'Document uploaded successfully', fileUrl: publicUrl });
    } catch (error) {
      res.status(500).json({ message: 'Error uploading document', error: error.message });
    }
  });
};


module.exports = { createRequest, uploadDocument, getRequestById, updateRequest };