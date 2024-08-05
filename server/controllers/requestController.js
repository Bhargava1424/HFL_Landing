// requestController.js

const Request = require('../models/Request');
const formidable = require('formidable');
const ocr = require('../utils/ocr');
const { Storage } = require('@google-cloud/storage');
const exp = require('constants');
const storage = new Storage();
const fs = require('fs').promises;
const mongoose = require('mongoose');


const getSignedUrlForFile = async (fileUrl) => {
  const parts = fileUrl.split('/');
  const filename = parts.pop(); 
  const folderPath = parts.slice(3).join('/'); // Adjust this based on your URL structure

  const bucket = storage.bucket(process.env.GOOGLE_CLOUD_BUCKET_NAME);
  const file = bucket.file(folderPath ? `${folderPath}/${filename}` : filename);

  const [signedUrl] = await file.getSignedUrl({
    action: 'read',
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
  });

  return signedUrl;
};



const createRequest = async (req, res) => {
  try {
    const { name, phoneNumber, email, amount, currency } = req.body;

    const newRequest = new Request({
      name,
      phoneNumber,
      email,
      amount: parseFloat(amount),
      currency,
      documents: [],
    });
    await newRequest.save();
    res.status(201).json({ message: 'Request created successfully', requestId: newRequest._id });
  } catch (error) {
    res.status(500).json({ message: 'Error creating request', error: error.message });
  }
};

const getRequests = async (req, res) => {
  try {
    const requests = await Request.find();
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching requests', error: error.message });
  }
};



const getRequestById = async (req, res) => {
  const requestId = req.params.requestId;
  try {
    const request = await Request.findById(requestId);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    // Replace each document file with signed URLs
    const updatedDocuments = await Promise.all(request.documents.map(async (document) => {
      const signedUrl = await getSignedUrlForFile(document.file);
      return {
        ...document,
        file: signedUrl,
      };
    }));
    request.documents = updatedDocuments;
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
  const form = new formidable.IncomingForm({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: 'Error parsing form data', error: err.message });
    }

    const uploadedFiles = Object.values(files).flat();

    for (const documentFile of uploadedFiles) {
      const type = Array.isArray(fields.documentType) ? fields.documentType[0] : fields.documentType;

      console.log('Processing document:', documentFile.originalFilename);
      console.log('Document type:', type);
      console.log('Request ID:', requestId);

      try {

        // Read the file contents into a buffer
        const documentBuffer = await fs.readFile(documentFile.filepath);
        
        const bucket = storage.bucket(process.env.GOOGLE_CLOUD_BUCKET_NAME);
        const fileName = `${requestId}/${type}-${Date.now()}-${documentFile.originalFilename}`;
        const file = bucket.file(fileName);
         // Upload the buffer to GCS without setting individual object ACLs
         await file.save(documentBuffer, {
          metadata: {
            contentType: documentFile.mimetype,
          },
        });

        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
        console.log('File uploaded to:', publicUrl);

        console.log("documentBuffer", documentBuffer)

        // Perform OCR
        let ocrData = {};
        try {
          ocrData = await ocr.extractText(documentBuffer, type, documentFile.mimetype);
        } catch (error) {
          console.error('Error performing OCR:', error);
        }

        const request = await Request.findById(requestId);
        if (!request) {
          return res.status(404).json({ message: 'Request not found' });
        }

        request.documents.push({
          type,
          file: publicUrl,
          ocrText: ocrData.ocrText || '',
          extractedData: ocrData.extractedData || {},
        });

        request.finalExtractedData = { ...request.finalExtractedData, ...ocrData.extractedData };

        await request.save();
        res.status(200).json({ message: 'Document processed and uploaded successfully', fileUrl: publicUrl });
      } catch (error) {
        console.error('Error processing document:', error);
        res.status(500).json({ message: 'Error processing document', error: error.message });
      }
    }
  });
};

const getSignedUrl = async (req, res) => {
  console.log(req)
  const fullUrl = req.body.url; // Full URL from the route parameter

  // Extract the filename and folder path (if any)
  const parts = fullUrl.split('/');
  const filename = parts.pop(); // Last part is the filename
  const folderPath = parts.pop(); // Remaining parts are the folder path

  try {
    const bucket = storage.bucket(process.env.GOOGLE_CLOUD_BUCKET_NAME);
    const file = bucket.file(folderPath ? `${folderPath}/${filename}` : filename); // Combine folder and filename

    const [signedUrl] = await file.getSignedUrl({
      action: 'read',
      expires: Date.now() + 15 * 60 * 1000, // 15 minutes
    });

    res.status(200).json({ signedUrl });
  } catch (error) {
    console.error('Error generating signed URL:', error);
    res.status(500).json({ error: 'Failed to generate signed URL' });
  }
};

const getJsonData = async (req, res) => {
  const passportNumber = req.params.passportNumber;

  try {
    console.log("passportNumber", passportNumber)
    const request = await mongoose.model('Request').findOne({ "finalExtractedData.PassportNumber" : passportNumber });
    // const request = await Request.findOne({ "finalExtractedData.passportNumber" : passportNumber });
    console.log("request", request)
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    const { finalExtractedData } = request;

    const address = finalExtractedData.PassportAddress || finalExtractedData.AdharAddress || "";
    // Updated regex pattern to match the new format
    const pattern = /^(H\.NO\s+[\d-]+),\s*(.+?)\s*PIN:(\d{6})/i;

    const match = address.match(pattern);

    let houseNumber = "", street = "", pincode = "";

    if (match) {
        [, houseNumber, street, pincode] = match;
        houseNumber = houseNumber.replace(/^H\.NO\s+/i, '').trim();
        street = street.trim();
        pincode = pincode.trim();

        // Further cleanup of street (remove any remaining house number mention)
        street = street.replace(new RegExp('^' + houseNumber + ',?\\s*', 'i'), '');
    }
    
    const jsonData = {
      passportNumber: finalExtractedData.PassportNumber || "",
      placeOfIssue: finalExtractedData.PlaceOfIssue || "",
      passportName: finalExtractedData.PassportName || "",
      fatherName: finalExtractedData.FatherName || "",
      adharNumber: finalExtractedData.AdharNumber || "",
      houseNumber: houseNumber,
      street: street,
      pincode: pincode,
      panNumber: finalExtractedData.PanNumber || "",
      email: request.email || "",
      sponsorPanNumber: finalExtractedData.PanNumber || "",
      contactNumber: request.phoneNumber || "",
      ticketNumber: finalExtractedData.TicketNumber || "",
      airLine: finalExtractedData.AirLine || "",
      travelDate: finalExtractedData.TravelDate || "",
      duration: finalExtractedData.Duration || "",
      expiryDate: finalExtractedData.ExpiryDate || "",
      issueDate: finalExtractedData.IssueDate || "",
      destination: finalExtractedData.Destination || "",
    };

    return res.status(200).json(jsonData);
  } catch (error) {
    console.error("Error in getJsonData:", error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


module.exports = { createRequest, uploadDocument, getRequests, getRequestById, updateRequest, getSignedUrl, getJsonData };