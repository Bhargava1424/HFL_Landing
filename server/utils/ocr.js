const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

const extractDataFromText = (text, documentType) => {
  const extractedData = {};
  const lines = text.split('\n'); 

  if (documentType === 'passport') {
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('Name')) {
        extractedData['Name as per passport'] = lines[i + 1].trim(); 
      } else if (lines[i].includes('Passport No.')) {
        extractedData['Passport number'] = lines[i + 1].trim();
      } else if (lines[i].includes('Place of Issue')) {
        extractedData['Place of issue'] = lines[i + 1].trim(); 
      } else if (lines[i].includes('Date of Issue')) {
        extractedData['Issue date'] = lines[i + 1].trim(); 
      } else if (lines[i].includes('Date of Expiry')) {
        extractedData['Expiry date'] = lines[i + 1].trim(); 
      } else if (lines[i].includes('Father')) {
        extractedData['Father name'] = lines[i + 1].trim(); 
      } 
    }
  } else if (documentType === 'aadhar') {
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('Aadhaar Number')) { 
        extractedData['Aadhar number'] = lines[i].split(':')[1].trim(); 
      } else if (lines[i].includes('Address')) {
        extractedData['Address as per aadhar'] = lines[i + 1].trim() + ' ' + lines[i + 2].trim(); 
      }
    }
  } else if (documentType === 'pan') {
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('Account Number')) {
        extractedData['PAN number'] = lines[i].split(':')[1].trim(); 
      } else if (lines[i].includes('Name')) {
        extractedData['Name as per pan'] = lines[i + 1].trim(); 
      }
    }
  } else if (documentType === 'ticket') {
    // ... (add extraction logic for ticket)
  }

  return extractedData;
};

const extractText = async (fileBuffer, documentType) => {
  try {
    // Convert file buffer to base64
    const base64Image = fileBuffer.toString('base64');
    // Create the request object with 'image' and 'features'
    const request = {
      requests: [
        {
          image: { content: base64Image }, 
          features: [{ type: 'DOCUMENT_TEXT_DETECTION' }], // Specify DOCUMENT_TEXT_DETECTION
        }
      ],
    };

    // Use annotateImage to perform text detection
    const [result] = await client.annotateImage(request);

    // Extract text and data (if available)
    let ocrText = ''; 
    let extractedData = {}; 

    // The response format is different with annotateImage
    if (result && result[0] && result[0].fullTextAnnotation) {
      ocrText = result[0].fullTextAnnotation.text || '';
      extractedData = extractDataFromText(ocrText, documentType);
    }

    return { ocrText, extractedData };

  } catch (error) {
    console.error('Error performing OCR:', error);
    throw error; 
  }
};

module.exports = { extractText };