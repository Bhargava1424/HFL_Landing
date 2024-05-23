const mongoose = require('mongoose'); 

const requestSchema = new mongoose.Schema({ 
    name: { type: String, required: true }, 
    phoneNumber: { type: String, required: true }, 
    email: { type: String, required: true }, 
    amount: { type: Number, required: true }, 
    currency: { type: String, required: true, enum: ['USD', 'EUR', 'GBP', 'INR'] }, 
    status: { type: String, default: 'pending' }, 
    documents: [{ 
        type: { type: String, required: true, enum: ['pan', 'passport', 'aadhar', 'drivingLicense'] }, 
        file: { type: String, required: true },  
        ocrText: { type: String }, 
        extractedData: { type: Object } 
    }], 
    createdAt: { type: Date, default: Date.now }
}); 

module.exports = mongoose.model('Request', requestSchema);