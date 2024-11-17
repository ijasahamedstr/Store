// Import required modules
import express from "express";
import { ColorDelete, ColorIndex, ColorSingleDetails, ColorUpdate, RegisterColorNew } from "../../controller/Admin/color.Controller.js";

const Colorrouter = express.Router()

//CURD Functionality of Registertion

// Create the Data Register
Colorrouter.post('/',RegisterColorNew);

// View the Data Register
Colorrouter.get('/',ColorIndex);

// View the Single Data Register
Colorrouter.get("/:id",ColorSingleDetails);

//Delete Data Register
Colorrouter.delete('/:id',ColorDelete);

//Update Data Register
Colorrouter.put('/:id',ColorUpdate);

export default Colorrouter;