import express from 'express';
import { EndCategoriesRegisterIndexs, EndCategoriesRegisters, EndCategoriesRegisterSingleDetails, EndCategoriesRegisterUpdate, RegisterEndCategoriesDelete } from '../../controller/Admin/EndCategories.Controller.js';

// Create a new router instance
const EndCategoriesrouter = express.Router();

// Define the POST route with file upload and Image handler
EndCategoriesrouter.post('/',EndCategoriesRegisters);

EndCategoriesrouter.get('/',EndCategoriesRegisterIndexs);

EndCategoriesrouter.delete('/:id',RegisterEndCategoriesDelete);

EndCategoriesrouter.put('/:id',EndCategoriesRegisterUpdate);

EndCategoriesrouter.get("/:id",EndCategoriesRegisterSingleDetails)


export default EndCategoriesrouter;
