import { model, Schema } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

// Define the schema
const RegisterEndCategoriesSchema = new Schema({
    categories : {
        type: String,
    },
    midCategories : {
        type: String,
    },
    endCategories : {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

// Create the model
const RegisterEndCategories = model("EndCategories", RegisterEndCategoriesSchema);

export default RegisterEndCategories;
