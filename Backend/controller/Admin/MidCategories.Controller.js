import RegisterMidCategories from "../../models/Admin/MidCategories.models.js";

export const MidCategoriesRegisters = async (req, res) => {
    const { categories, midCategories } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await RegisterMidCategories.findOne({ midCategories });

        if (existingUser) {
            return res.status(409).json({ error: "This City already exists in our database." });
        }

        // Create a new account
        const newAccount = new RegisterMidCategories({
            categories, midCategories
        });

        // Save the new account
        const savedAccount = await newAccount.save();
        res.status(201).json(savedAccount); // 201 Created
    } catch (error) {
        console.error("Error creating City:", error);
        res.status(500).json({ error: "Internal server error", details: error.message });
    }
};


// All Acccount View 
export const MidCategoriesRegisterIndexs = async (req, res) => {
    try {
        const MidCategoriesRegister = await RegisterMidCategories.find();
        res.json(MidCategoriesRegister);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// single Acccount View 

export const MidCategoriesRegisterSingleDetails = async (req, res) => {
    try {
        const MidCategoriesRegister = await RegisterMidCategories.findById(req.params.id);
        if (MidCategoriesRegister == null) {
            return res.status(404).json({ message: "Cannot Find City" });
        }
        else {
            res.json(MidCategoriesRegister);

        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Acccount Delete

export const RegisterMidCategoriesDelete = async (req, res) => {
    const AccountId =  req.params.id;
    
    try {
         await RegisterMidCategories.deleteOne({_id: AccountId})
         res.json({message:"MidCategories deleted!"});
    } catch (error) {
     res.status(500).json({message:error.message})
    }
 };
 

// All Acccount Update

export const MidCategoriesRegisterUpdate = async (req, res) => {

    try {
        const CategoriesRegisterUpdatelist =  await RegisterMidCategories.findOneAndUpdate({_id: req.params.id},{
            categories: req.body.categories,
            midCategories: req.body.midCategories,
        },
        {
            new:true,
        }
    );
        res.status(200).json(CategoriesRegisterUpdatelist);

    } catch (error) {
        res.status(400).json({message:error.message});
    }
};