import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Define the schema
const CategoriesSchema = new mongoose.Schema({
    Categorie: {
        type: String,
    },
    Categoriedec: {
        type: String,
    },
    Categoriesstatus: {
        type: String,
    },
    imgpath: {
        type: String,
        required: true,  // Assuming imgpath is required for each account
    },
    date: {
        type: Date,
    },

}, { timestamps: true });

// Create the model
const Categories = mongoose.model('Categories', CategoriesSchema);

// Export the model
export default Categories;
