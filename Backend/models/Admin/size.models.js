import { model, Schema } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

// Define the schema
const RegisterSizeSchema = new Schema({
    size : {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

// Create the model
const RegisterSize = model("Size", RegisterSizeSchema);

export default RegisterSize;
