import mongoose from 'mongoose';

const AddProductSchema = new mongoose.Schema({
    userid: {
        type: String,
    },

    category: {
        type: String,
    },

    midcategory: {
        type: String,
    },

    endcategory: {
        type: String,
    },
    
    productname: {
        type: String,
    },
    offerPrice: {
        type: Number,
    },

    currentprice: {
        type: Number,
    },

    quantity: {
        type: Number,
    },

    size: {
        type: String,
    },

    color: {
        type: String,
    },

    description: {
        type: String,
    },

    shortdescription: {
        type: String,
    },

    features: {
        type: String,
    },

    conditions: {
        type: String,
    },

    returnpolicy: {
        type: String,
    },

    productstutus: {
        type: String,
    },

    Productpic: {
        type: [String], // Assuming you want an array of strings. Adjust type as necessary.

    }
}, { timestamps: true });

// model
const AddProduct = mongoose.model('Product', AddProductSchema);

export default AddProduct;
