const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient(); // Make sure you have set up Google Cloud credentials

const extractText = async (filename) => {
  try { 
    // Assuming files are in the 'uploads' bucket 
    const [result] = await client.textDetection(`gs://your-gcp-bucket/uploads/${filename}`);

    const text = result.textAnnotations.map((textAnnotation) => {
      return textAnnotation.description; 
    });

    return text.join(''); 
  } catch (error) { 
    console.error('Error performing OCR:', error);
    return null; 
  } 
}; 

module.exports = { extractText };