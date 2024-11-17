// Import required modules
import express from "express";
import { RegisterSizeNew, SizeDelete, SizeIndex, SizeSingleDetails, SizeUpdate} from "../../controller/Admin/size.Controller.js";


const Sizerouter = express.Router()

//CURD Functionality of Registertion

// Create the Data Register
Sizerouter.post('/',RegisterSizeNew);

// View the Data Register
Sizerouter.get('/',SizeIndex);

// View the Single Data Register
Sizerouter.get("/:id",SizeSingleDetails);

//Delete Data Register
Sizerouter.delete('/:id',SizeDelete);

//Update Data Register
Sizerouter.put('/:id',SizeUpdate);

export default Sizerouter;