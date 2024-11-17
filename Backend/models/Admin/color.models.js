import { model, Schema } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

// Define the schema
const RegisterColorSchema = new Schema({
    color : {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

// Create the model
const RegisterColor = model("Color", RegisterColorSchema);

export default RegisterColor;
