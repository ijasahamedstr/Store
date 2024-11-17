// Import required modules
import express from "express";
import { AccountCreatcustomer } from "../../controller/AccountRegisterCustomer.Controller.js";


const AccountAdminrouter = express.Router()

//CURD Functionality of Registertion

// Create the Data Register
AccountAdminrouter.post('/',AccountCreatcustomer);


export default AccountAdminrouter;