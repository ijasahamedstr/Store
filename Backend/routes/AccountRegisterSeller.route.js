// Import required modules
import express from "express";
import { AccountCreatseller } from "../controller/AccountRegisterSeller.Controller.js";


const Accountsellerrouter = express.Router()

//CURD Functionality of Registertion

// Create the Data Register
Accountsellerrouter.post('/',AccountCreatseller);



export default Accountsellerrouter;