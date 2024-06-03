const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

const extractDataFromText = (text, documentType) => {
  const extractedData = {};
  const lines = text.split('\n');

  if (documentType === 'passport') {
    lines.forEach((line, i) => {
      if (line.includes('Name')) {
        extractedData['Name as per passport'] = lines[i + 1]?.trim() || '';
      } else if (line.includes('Passport No.')) {
        extractedData['Passport number'] = lines[i + 1]?.trim() || '';
      } else if (line.includes('Place of Issue')) {
        extractedData['Place of issue'] = lines[i + 1]?.trim() || '';
      } else if (line.includes('Date of Issue')) {
        extractedData['Issue date'] = lines[i + 1]?.trim() || '';
      } else if (line.includes('Date of Expiry')) {
        extractedData['Expiry date'] = lines[i + 1]?.trim() || '';
      } else if (line.includes('Father')) {
        extractedData['Father name'] = lines[i + 1]?.trim() || '';
      }
    });
  } else if (documentType === 'aadhar') {
    lines.forEach((line, i) => {
      if (line.includes('Aadhaar Number')) {
        extractedData['Aadhar number'] = line.split(':')[1]?.trim() || '';
      } else if (line.includes('Address')) {
        extractedData['Address as per aadhar'] = `${lines[i + 1]?.trim() || ''} ${lines[i + 2]?.trim() || ''}`;
      }
    });
  } else if (documentType === 'pan') {
    lines.forEach((line, i) => {
      if (line.includes('Account Number')) {
        extractedData['PAN number'] = line.split(':')[1]?.trim() || '';
      } else if (line.includes('Name')) {
        extractedData['Name as per pan'] = lines[i + 1]?.trim() || '';
      }
    });
  } else if (documentType === 'ticket') {
    // Add extraction logic for ticket
  }

  return extractedData;
};

const extractText = async (fileBuffer, documentType) => {
  try {
    const base64Image = fileBuffer.toString('base64');
    const request = {
      image: { content: base64Image },
      features: [{ type: 'DOCUMENT_TEXT_DETECTION' }]
    };

    const [result] = await client.annotateImage(request);

    let ocrText = '';
    let extractedData = {};

    if (result?.fullTextAnnotation) {
      ocrText = result.fullTextAnnotation.text || '';
      extractedData = extractDataFromText(ocrText, documentType);
    }

    return { ocrText, extractedData };
  } catch (error) {
    console.error('Error performing OCR:', error);
    throw error;
  }
};

module.exports = { extractText };
