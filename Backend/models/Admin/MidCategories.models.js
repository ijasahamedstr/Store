import { model, Schema } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

// Define the schema
const RegisterMidCategoriesSchema = new Schema({
    categories : {
        type: String,
    },
    midCategories : {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

// Create the model
const RegisterMidCategories = model("MidCategories", RegisterMidCategoriesSchema);

export default RegisterMidCategories;
