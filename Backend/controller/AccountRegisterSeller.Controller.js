
import AccountRegisterSeller from "../models/AccountRegisterseller.models.js";

export const AccountCreatseller = async (req, res) => {
    const { sfullname, semail, sphoneno, saddress } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await AccountRegisterSeller.findOne({ semail });

        if (existingUser) {
            return res.status(409).json({ error: "This user already exists in our database." });
        }

        // Create a new account
        const newAccount = new AccountRegisterSeller({
            sfullname,
            semail,
            sphoneno,
            saddress,
        });

        // Save the new account
        const savedAccount = await newAccount.save();
        res.status(201).json(savedAccount); // 201 Created
    } catch (error) {
        console.error("Error creating account:", error);
        res.status(500).json({ error: "Internal server error", details: error.message });
    }
};
