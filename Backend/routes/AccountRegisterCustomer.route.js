// Import required modules
import express from "express";
import multer from 'multer';
import { AccountCreate } from "../controller/AccountRegisterCustomer.Controller.js";


const Accountrouter = express.Router()


// Image storage configuration
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads');
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

//CURD Functionality of Registertion

// Create the Data Register
Accountrouter.post('/',AccountCreate);



export default Accountrouter;