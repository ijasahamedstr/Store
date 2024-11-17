import express from 'express';
import multer from 'multer';
import { Categoriescreate, CategoriesDelete, CategoriesIndex, CategoriesSingleDetails, CategoriesUpdate,  } from '../../controller/Admin/Categories.Controller.js';

// Create a new router instance
const Categoriesrouter = express.Router();

// Image storage configuration
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/Categories');
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
Categoriesrouter.post('/', upload.single('photo'),Categoriescreate );

Categoriesrouter.get('/', CategoriesIndex);

Categoriesrouter.delete('/:id', CategoriesDelete);

Categoriesrouter.put('/:id',upload.single('photo'), CategoriesUpdate);

Categoriesrouter.get("/:id", CategoriesSingleDetails)




export default Categoriesrouter;
