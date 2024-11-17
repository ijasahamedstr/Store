import RegisterEndCategories from "../../models/Admin/EndCategories.models.js";


export const EndCategoriesRegisters = async (req, res) => {
    const { categories, midCategories, endCategories  } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await RegisterEndCategories.findOne({ midCategories });

        if (existingUser) {
            return res.status(409).json({ error: "This City already exists in our database." });
        }

        // Create a new account
        const newAccount = new RegisterEndCategories({
            categories, midCategories, endCategories
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
export const EndCategoriesRegisterIndexs = async (req, res) => {
    try {
        const EndCategoriesRegister = await RegisterEndCategories.find();
        res.json(EndCategoriesRegister);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// single Acccount View 

export const EndCategoriesRegisterSingleDetails = async (req, res) => {
    try {
        const EndCategoriesRegister = await RegisterEndCategories.findById(req.params.id);
        if (EndCategoriesRegister == null) {
            return res.status(404).json({ message: "Cannot Find City" });
        }
        else {
            res.json(EndCategoriesRegister);

        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Acccount Delete

export const RegisterEndCategoriesDelete = async (req, res) => {
    const AccountId =  req.params.id;
    
    try {
         await RegisterEndCategories.deleteOne({_id: AccountId})
         res.json({message:"MidCategories deleted!"});
    } catch (error) {
     res.status(500).json({message:error.message})
    }
 };
 

// All Acccount Update

export const EndCategoriesRegisterUpdate = async (req, res) => {

    try {
        const endCategoriesRegisterUpdatelist =  await RegisterEndCategories.findOneAndUpdate({_id: req.params.id},{
            categories: req.body.categories,
            midCategories: req.body.midCategories,
            endCategories: req.body.endCategories,
        },
        {
            new:true,
        }
    );
        res.status(200).json(endCategoriesRegisterUpdatelist);

    } catch (error) {
        res.status(400).json({message:error.message});
    }
};