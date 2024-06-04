// ocr.js

const { DocumentProcessorServiceClient } = require('@google-cloud/documentai').v1;

const extractText = async (fileBuffer, documentType, mimeType) => {
  try {
    // Instantiates a client
    const client = new DocumentProcessorServiceClient();

    name = process.env.PROCESSOR_NAME;
    // Prepare the request using the file buffer
    const request = {
      name,
      rawDocument: {
        content: fileBuffer.toString('base64'),
        mimeType: mimeType, 
      },
    };

    // Recognizes text entities in the document
    const [result] = await client.processDocument(request);
    const { document } = result;

    console.log('Document processing complete:', document);

    // Get all of the document text as one big string
    const { text } = document;

    // Helper function to extract text from textAnchor
    const getText = (textAnchor) => {
      if (!textAnchor.textSegments || textAnchor.textSegments.length === 0) {
        return '';
      }
      const startIndex = textAnchor.textSegments[0].startIndex || 0;
      const endIndex = textAnchor.textSegments[0].endIndex;
      return text.substring(startIndex, endIndex);
    };

    // Extract data from the document based on type
    const extractedData = {};
    const [page1] = document.pages; // Assuming you only need data from the first page
    const { paragraphs } = page1;

    if (document.entities) {
      document.entities.forEach(entity => {
      console.log(`Entity value: ${entity.mentionText}`);
      console.log(`Entity type: ${entity.type}`);
      extractedData[entity.type] = entity.mentionText;
      });
    }

    return { ocrText: text, extractedData };

  } catch (error) {
    console.error('Error performing OCR:', error);
    throw error; // Re-throw the error to be handled by the calling function
  }
};

module.exports = { extractText };