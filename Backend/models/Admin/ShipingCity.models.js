import { model, Schema } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

// Define the schema
const RegisterShipingCitySchema = new Schema({
    city : {
        type: String,
    },
    amount : {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

// Create the model
const RegisterShipingCity = model("Shiping-City", RegisterShipingCitySchema);

export default RegisterShipingCity;
