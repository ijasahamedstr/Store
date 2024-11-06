import { model, Schema } from "mongoose";
import jwt from "jsonwebtoken";
import validator from 'validator';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

// Define the schema
const AccountRegisterSellerSchema = new Schema({
    sfullname : {
        type: String,
        required: true,
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
    otp: {
        type: String,
    },
    saddress: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
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
AccountRegisterSellerSchema.methods.generateAuthtoken = async function() {
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
const AccountRegisterSeller = model("AccountRegisterSeller", AccountRegisterSellerSchema);

export default AccountRegisterSeller;