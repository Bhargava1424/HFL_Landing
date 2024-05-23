const { vision } = require('@google-cloud/vision'); // Correct import statement

const extractText = async (imageUrl) => {
  try {
    // Perform OCR using Google Cloud Vision API
    const [result] = await vision.textDetection(imageUrl);
    const text = result.textAnnotations.map((textAnnotation) => {
      return textAnnotation.description;
    });
    return text.join(''); // Concatenate all OCR text
  } catch (error) {
    console.error('Error performing OCR:', error);
    return null;
  }
};

module.exports = { extractText };