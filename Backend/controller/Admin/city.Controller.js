import RegisterCity from "../../models/Admin/City.models.js";

export const CityRegisters = async (req, res) => {
    const { city } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await RegisterCity.findOne({ city });

        if (existingUser) {
            return res.status(409).json({ error: "This City already exists in our database." });
        }

        // Create a new account
        const newAccount = new RegisterCity({
            city
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
export const CityIndex = async (req, res) => {
    try {
        const CityRegister = await RegisterCity.find();
        res.json(CityRegister);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// single Acccount View 

export const CitySingleDetails = async (req, res) => {
    try {
        const CityRegister = await RegisterCity.findById(req.params.id);
        if (CityRegister == null) {
            return res.status(404).json({ message: "Cannot Find City" });
        }
        else {
            res.json(CityRegister);

        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Acccount Delete

export const CityDelete = async (req, res) => {
    const AccountId =  req.params.id;
    
    try {
         await RegisterCity.deleteOne({_id: AccountId})
         res.json({message:"City deleted!"});
    } catch (error) {
     res.status(500).json({message:error.message})
    }
 };
 

// All Acccount Update

export const CityUpdate = async (req, res) => {

    try {
        const CityUpdatelist =  await RegisterCity.findOneAndUpdate({_id: req.params.id},{
            city: req.body.city,
        },
        {
            new:true,
        }
    );
        res.status(200).json(CityUpdatelist);

    } catch (error) {
        res.status(400).json({message:error.message});
    }
};


