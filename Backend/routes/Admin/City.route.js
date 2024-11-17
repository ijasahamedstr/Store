// Import required modules
import express from "express";
import { CityDelete, CityIndex, CityRegisters, CitySingleDetails, CityUpdate } from "../../controller/Admin/city.Controller.js";


const cityrouter = express.Router()

//CURD Functionality of Registertion

// Create the Data Register
cityrouter.post('/',CityRegisters);

// View the Data Register
cityrouter.get('/',CityIndex);

// View the Single Data Register
cityrouter.get("/:id",CitySingleDetails);

//Delete Data Register
cityrouter.delete('/:id',CityDelete);

//Update Data Register
cityrouter.put('/:id',CityUpdate);

export default cityrouter;