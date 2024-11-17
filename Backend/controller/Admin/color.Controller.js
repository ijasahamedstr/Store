import RegisterColor from "../../models/Admin/color.models.js";

export const RegisterColorNew = async (req, res) => {
    const { color } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await RegisterColor.findOne({ color });

        if (existingUser) {
            return res.status(409).json({ error: "This user already exists in our database." });
        }

        // Create a new account
        const newAccount = new RegisterColor({
            color
        });

        // Save the new account
        const savedAccount = await newAccount.save();
        res.status(201).json(savedAccount); // 201 Created
    } catch (error) {
        console.error("Error creating account:", error);
        res.status(500).json({ error: "Internal server error", details: error.message });
    }
};


// All Acccount View 
export const ColorIndex = async (req, res) => {
    try {
        const ColorRegister = await RegisterColor.find();
        res.json(ColorRegister);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// single Acccount View 

export const ColorSingleDetails = async (req, res) => {
    try {
        const ColorRegister = await RegisterColor.findById(req.params.id);
        if (ColorRegister == null) {
            return res.status(404).json({ message: "Cannot Find Color" });
        }
        else {
            res.json(ColorRegister);

        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Acccount Delete

export const ColorDelete = async (req, res) => {
    const AccountId =  req.params.id;
    
    try {
         await RegisterColor.deleteOne({_id: AccountId})
         res.json({message:"Color deleted!"});
    } catch (error) {
     res.status(500).json({message:error.message})
    }
 };
 

// All Acccount Update

export const ColorUpdate = async (req, res) => {

    try {
        const ColorUpdatelist =  await RegisterColor.findOneAndUpdate({_id: req.params.id},{
            color: req.body.color,
        },
        {
            new:true,
        }
    );

        res.status(200).json(ColorUpdatelist);

    } catch (error) {
        res.status(400).json({message:error.message});
    }
};


