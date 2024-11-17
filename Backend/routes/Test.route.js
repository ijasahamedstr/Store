// Import required modules
import express from "express";
import { AccountCreate, AccountDelete, AccountIndex, AccountSingleDetails, AccountUpdate } from "../controller/Test.Controller.js";


const Testrouter = express.Router()

//CURD Functionality of Registertion

// Create the Data Register
Testrouter.post('/',AccountCreate);

// View the Data Register
Testrouter.get('/',AccountIndex);

// View the Single Data Register
Testrouter.get("/:id",AccountSingleDetails)

//Update Data Register
Testrouter.put('/:id',AccountUpdate);

//Delete Data Register

Testrouter.delete('/:id',AccountDelete);

export default Testrouter;