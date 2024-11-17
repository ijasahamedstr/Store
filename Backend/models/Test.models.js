import { model, Schema } from "mongoose";

// Define the schema
const AccountRegisterSchema = new Schema({
    fname: {
        type: String,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    Phone: {
        type: String, // Changed from Number to String for phone number
    }
});

// Create the model
const AccountRegister = model("AccountRegister", AccountRegisterSchema);

export default AccountRegister;
