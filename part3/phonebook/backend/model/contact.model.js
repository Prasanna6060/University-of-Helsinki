import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    number: {
        type: String
    }
},{timestamps: true});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;