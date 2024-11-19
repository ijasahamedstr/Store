import express from 'express';
import userUpload from '../../multerConfig/userConfig.js';
import { AddProductDelete, AddProductIndex, AddProductInsert, AddProductSingleDetails } from '../../controller/Client/AddProduct.Controller.js';


const AddProductrouter = express.Router();

// User routes
AddProductrouter.post('/', userUpload.array('userimg'),AddProductInsert);

// View the Data Register
AddProductrouter.get('/', AddProductIndex);

// View the Single Data Register
AddProductrouter.get("/:id",AddProductSingleDetails);

//Update Data Register
// AddProductrouter.put('/:id',);

//Delete Data Register
AddProductrouter.delete('/:id',AddProductDelete);

export default AddProductrouter;
