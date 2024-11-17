import { model, Schema } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

// Define the schema
const RegisterCitySchema = new Schema({
    city : {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

// Create the model
const RegisterCity = model("City", RegisterCitySchema);

export default RegisterCity;
