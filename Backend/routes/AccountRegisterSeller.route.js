import express from 'express';
import multer from 'multer';
import { Accountsellercreate } from '../controller/AccountRegisterSeller.Controller.js';

// Create a new router instance
const Accountsellerrouter = express.Router();

// Image storage configuration
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/AccountActive');
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`);
    }
});

// Image filter
const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith('image')) {
        callback(null, true);
    } else {
        callback(new Error('Only images are allowed'));
    }
};

const upload = multer({
    storage: imgconfig,
    fileFilter: isImage
});

// Define the POST route with file upload and Image handler
Accountsellerrouter.post('/', upload.single('photo'), Accountsellercreate );


export default Accountsellerrouter;
