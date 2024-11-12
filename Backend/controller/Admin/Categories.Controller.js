import moment from 'moment';
import Categories from '../../models/Admin/Categories.models.js';

// All Account Create
export const Categoriescreate = async (req, res) => {
    const { filename } = req.file;
    const { Categorie, Categoriedec, Categoriesstatus } = req.body;

    // Check if all required fields are provided
    if (!Categorie || !Categoriedec || !Categoriesstatus || !filename) {
        return res.status(400).json({ status: 400, message: 'Please fill all the data' });
    }

    try {
        // Check if the email already exists in the database
        const existingUser = await Categories.findOne({ Categorie });

        if (existingUser) {
            return res.status(400).json({ status: 400, message: 'Categorie is already registered' });
        }

        // If email doesn't exist, create a new user
        const date = moment().format('YYYY-MM-DD');

        const userdata = new Categories({
            Categorie,
            Categoriedec,
            Categoriesstatus,
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

// All Acccount View 
export const CategoriesIndex = async (req, res) => {
    try {
        const CategoriesView = await Categories.find();
        res.json(CategoriesView);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// All Acccount Delete

export const CategoriesDelete = async (req, res) => {
    const CategoriesDeleteId =  req.params.id;
    
    try {
         await Categories.deleteOne({_id: CategoriesDeleteId})
         res.json({message:"Acoount deleted!"});
    } catch (error) {
     res.status(500).json({message:error.message})
    }
 };
