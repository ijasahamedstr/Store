// Import required modules
import express from "express";
import { AccountCreatcustomer } from "../controller/AccountRegisterCustomer.Controller.js";


const Accountrouter = express.Router()

//CURD Functionality of Registertion

// Create the Data Register
Accountrouter.post('/',AccountCreatcustomer);



export default Accountrouter;