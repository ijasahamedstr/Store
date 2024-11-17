import RegisterShipingCity from "../../models/Admin/ShipingCity.models.js";



export const ShipingCityRegister = async (req, res) => {
    const { city, amount } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await RegisterShipingCity.findOne({ city });

        if (existingUser) {
            return res.status(409).json({ error: "This City already exists in our database." });
        }

        // Create a new account
        const newAccount = new RegisterShipingCity({
            city, amount
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
export const ShipingCityIndex = async (req, res) => {
    try {
        const ShipingCityRegister = await RegisterShipingCity.find();
        res.json(ShipingCityRegister);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// single Acccount View 

export const ShipingCitySingleDetails = async (req, res) => {
    try {
        const ShipingCityRegister = await RegisterShipingCity.findById(req.params.id);
        if (ShipingCityRegister == null) {
            return res.status(404).json({ message: "Cannot Find City" });
        }
        else {
            res.json(ShipingCityRegister);

        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Acccount Delete

export const ShipingCityDelete = async (req, res) => {
    const AccountId =  req.params.id;
    
    try {
         await RegisterShipingCity.deleteOne({_id: AccountId})
         res.json({message:"City deleted!"});
    } catch (error) {
     res.status(500).json({message:error.message})
    }
 };
 

// All Acccount Update

export const ShipingCityUpdate = async (req, res) => {

    try {
        const ShipingCityUpdatelist =  await RegisterShipingCity.findOneAndUpdate({_id: req.params.id},{
            city: req.body.city,
            amount: req.body.amount,
        },
        {
            new:true,
        }
    );
        res.status(200).json(ShipingCityUpdatelist);

    } catch (error) {
        res.status(400).json({message:error.message});
    }
};


