import AddProduct from "../../models/Client/AddProduct.models.js";

export const AddProductInsert = async (req, res) => {
    // Extract files and fields from the request
    const files = req.files && req.files.length > 0 ? req.files : [];
    const { userid, category, midcategory, endcategory, productname, offerPrice, currentprice, quantity, size, color, description, shortdescription, features, conditions, returnpolicy, productstutus } = req.body;

    try {
        // Process files and store filenames (assuming multer or a similar middleware is used)
        const fileUrls = files.map((file) => file.filename);

        // Create a new product document with the data
        const newAddProduct = new AddProduct({
            userid,
            category,
            midcategory,
            endcategory,
            productname,
            offerPrice,
            currentprice,
            quantity,
            size,
            color,
            description,
            shortdescription,
            features,
            conditions,
            returnpolicy,
            productstutus,
            Productpic: fileUrls
        });

        // Save the product document to the database
        await newAddProduct.save();
        res.status(200).json({ message: "Product successfully added", productData: newAddProduct });
    } catch (error) {
        console.error("Error in AddProductInsert:", error);
        res.status(500).json({ error: "An error occurred while adding the product." });
    }
};




// All Account View 
export const AddProductIndex = async (req, res) => {
    try {
        // Fetch all game registrations from the database
        const AddProductRegisters = await AddProduct.find();

        // Send the data as JSON response
        res.json(AddProductRegisters);
    } catch (error) {
        // Log the error for debugging purposes
        logger.error('Error fetching game registrations:', { message: error.message, stack: error.stack });

        // Send a 500 status code and error message
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


// single Acccount View 

export const AddProductSingleDetails = async (req, res) => {
    try {
        const AddProductRegister = await AddProduct.findById(req.params.id);
        if (AddProductRegister == null) {
            return res.status(404).json({ message: "Cannot Find Product" });
        }
        else {
            res.json(AddProductRegister);

        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


// All Acccount Delete

export const AddProductDelete = async (req, res) => {
    const ProductId =  req.params.id;
    
    try {
         await AddProduct.deleteOne({_id: ProductId})
         res.json({message:"Product Acoount deleted!"});
    } catch (error) {
     res.status(500).json({message:error.message})
    }
 };
 

