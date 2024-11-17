import RegisterSize from "../../models/Admin/size.models.js";


export const RegisterSizeNew = async (req, res) => {
    const { size } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await RegisterSize.findOne({ size });

        if (existingUser) {
            return res.status(409).json({ error: "This user already exists in our database." });
        }

        // Create a new account
        const newAccount = new RegisterSize({
            size
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
export const SizeIndex = async (req, res) => {
    try {
        const SizeRegister = await RegisterSize.find();
        res.json(SizeRegister);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// single Acccount View 

export const SizeSingleDetails = async (req, res) => {
    try {
        const SizeRegister = await RegisterSize.findById(req.params.id);
        if (SizeRegister == null) {
            return res.status(404).json({ message: "Cannot Find Size" });
        }
        else {
            res.json(SizeRegister);

        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Acccount Delete

export const SizeDelete = async (req, res) => {
    const AccountId =  req.params.id;
    
    try {
         await RegisterSize.deleteOne({_id: AccountId})
         res.json({message:"Size deleted!"});
    } catch (error) {
     res.status(500).json({message:error.message})
    }
 };
 

// All Acccount Update

export const SizeUpdate = async (req, res) => {

    try {
        const AccountUpdatelist =  await RegisterSize.findOneAndUpdate({_id: req.params.id},{
            size: req.body.size,
        },
        {
            new:true,
        }
    );

        res.status(200).json(AccountUpdatelist);

    } catch (error) {
        res.status(400).json({message:error.message});
    }
};


