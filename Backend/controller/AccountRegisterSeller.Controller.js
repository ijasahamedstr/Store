import moment from 'moment';
import Accountactive from '../models/AccountRegisterseller.models.js';

// All Account Create
export const Accountsellercreate = async (req, res) => {
    const { filename } = req.file;
    const { sfullname, semail, sphoneno, saddress,Accountstatus } = req.body;

    // Check if all required fields are provided
    if (!sfullname || !semail || !sphoneno || !saddress || !Accountstatus || !filename) {
        return res.status(400).json({ status: 400, message: 'Please fill all the data' });
    }

    try {
        // Check if the email already exists in the database
        const existingUser = await Accountactive.findOne({ semail });

        if (existingUser) {
            return res.status(400).json({ status: 400, message: 'Email is already registered' });
        }

        // If email doesn't exist, create a new user
        const date = moment().format('YYYY-MM-DD');

        const userdata = new Accountactive({
            sfullname,
            semail,
            sphoneno,
            saddress,
            Accountstatus,
            imgpath: filename,
            date
        });

        const finaldata = await userdata.save();

        // Return success response
        res.status(201).json({ status: 201, finaldata });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ status: 500, message: 'Internal server error', error });
    }
};
