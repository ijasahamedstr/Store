// Import required modules
import express from "express";
import { ShipingCityDelete, ShipingCityIndex, ShipingCityRegister, ShipingCitySingleDetails, ShipingCityUpdate } from "../../controller/Admin/ShipingCity.Controller.js";


const Shipingcityrouter = express.Router()

//CURD Functionality of Registertion

// Create the Data Register
Shipingcityrouter.post('/',ShipingCityRegister);

// View the Data Register
Shipingcityrouter.get('/',ShipingCityIndex);

// View the Single Data Register
Shipingcityrouter.get("/:id",ShipingCitySingleDetails);

//Delete Data Register
Shipingcityrouter.delete('/:id',ShipingCityDelete);

//Update Data Register
Shipingcityrouter.put('/:id',ShipingCityUpdate);

export default Shipingcityrouter;