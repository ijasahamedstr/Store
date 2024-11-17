import express from 'express';
import { MidCategoriesRegisterIndexs, MidCategoriesRegisters, MidCategoriesRegisterSingleDetails, MidCategoriesRegisterUpdate, RegisterMidCategoriesDelete } from '../../controller/Admin/MidCategories.Controller.js';

// Create a new router instance
const MidCategoriesrouter = express.Router();

// Define the POST route with file upload and Image handler
MidCategoriesrouter.post('/',MidCategoriesRegisters);

MidCategoriesrouter.get('/',MidCategoriesRegisterIndexs);

MidCategoriesrouter.delete('/:id',RegisterMidCategoriesDelete);

MidCategoriesrouter.put('/:id', MidCategoriesRegisterUpdate);

MidCategoriesrouter.get("/:id", MidCategoriesRegisterSingleDetails)


export default MidCategoriesrouter;
