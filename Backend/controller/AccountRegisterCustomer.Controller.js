import AccountRegisterCustomer from "../models/AccountRegistercustomer.models.js";

export const AccountCreate = async (req, res) => {
    const { fullname, email, phoneno, address, proofimage, accountstatus } = req.body;

 

    try {
        // Check if the user already exists
        const existingUser = await AccountRegisterCustomer.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ error: "This user already exists in our database." });
        }

        // Create a new account
        const newAccount = new AccountRegisterCustomer({
            fullname,
            email,
            phoneno,
            address,
            proofimage,
            accountstatus,
        });

        // Save the new account
        const savedAccount = await newAccount.save();
        res.status(201).json(savedAccount); // 201 Created
    } catch (error) {
        console.error("Error creating account:", error);
        res.status(500).json({ error: "Internal server error", details: error.message });
    }
};
