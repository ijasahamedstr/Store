import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

// Check if the SECRET_KEY is defined
if (!SECRET_KEY) {
    console.error("SECRET_KEY is not defined in environment variables.");
    process.exit(1);
}

// Define the schema
const AccountsellerSchema = new mongoose.Schema({
    sfullname: {
        type: String,
    },
    semail: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not a valid email");
            }
        },
    },
    sphoneno: {
        type: String,
        validate(value) {
            if (!validator.isMobilePhone(value, 'any', { strictMode: false })) {
                throw new Error("Not a valid phone number");
            }
        },
    },
    saddress: {
        type: String,
    },
    Accountstatus: {
        type: String,
    },
    imgpath: {
        type: String,
        required: true,  // Assuming imgpath is required for each account
    },
    date: {
        type: Date,
    },
    otp: {
        type: String,
    },
    tokens: [
        {
            token: {
                type: String,
            },
        },
    ],
}, { timestamps: true });

// Token generation method
AccountsellerSchema.methods.generateAuthtoken = async function() {
    try {
        const newToken = jwt.sign({ _id: this._id }, SECRET_KEY, {
            expiresIn: "1d",
        });

        // Add the new token to the tokens array
        this.tokens = this.tokens.concat({ token: newToken });
        await this.save();

        return newToken;
    } catch (error) {
        console.error("Error generating token:", error);
        throw new Error("Error generating token");
    }
};

// Create the model
const Accountseller = mongoose.model('Accountseller', AccountsellerSchema);

// Export the model
export default Accountseller;
