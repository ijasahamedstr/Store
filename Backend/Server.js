// Import required modules
import express from "express";
import connectDB from "./lib/db.js";
import cors from "cors";
import cookiParser from "cookie-parser";
import Accountrouter from './routes/AccountRegisterCustomer.route.js';
import path from 'path';
import { fileURLToPath } from 'url';
import Accountsellerrouter from './routes/AccountRegisterSeller.route.js';
import AccountAdminrouter from './routes/Admin/AccountRegisterAdmin.route.js';
import AccountAdminloginrouter from './routes/Admin/AccountLogin.route.js';
import Categoriesrouter from './routes/Admin/Categories.route.js';
import Sizerouter from './routes/Admin/size.route.js';
import Testrouter from './routes/Test.route.js';
import Colorrouter from "./routes/Admin/color.route.js";
import Shipingcityrouter from "./routes/Admin/ShipingCity.route.js";
import cityrouter from "./routes/Admin/City.route.js";
import MidCategoriesrouter from "./routes/Admin/MidCategories.route.js";
import EndCategoriesrouter from "./routes/Admin/EndCategories.route.js";
import AddProductrouter from "./routes/Client/AddProduct.route.js";


// Create an instance of Express
const app = express();

app.use(cookiParser());

// Connect DB
connectDB();

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(cors({
  origin:"http://localhost:3000",
  methods:"GET,POST,PUT,DELETE",
  credentials:true
}));

//Data understanding middleware
app.use(express.json());

//Validate your Data
app.use(express.urlencoded({extended:true}))

//CLIENT -> MIDDLEWARE -> SERVER
app.use('/register',Accountrouter);

app.use('/registerseller',Accountsellerrouter);

app.use('/AddProduct',AddProductrouter);



//ADMIN -> MIDDLEWARE -> SERVER
app.use('/Adminregister',AccountAdminrouter);

app.use('/Adminlogin', AccountAdminloginrouter);

app.use('/categories', Categoriesrouter);

app.use('/size',Sizerouter);

app.use('/color',Colorrouter);

app.use('/city',cityrouter);

app.use('/ShipingCity',Shipingcityrouter);

app.use('/MidCategories',MidCategoriesrouter);

app.use('/EndCategories',EndCategoriesrouter);


//TEST -> MIDDLEWARE -> SERVER
app.use('/Test',Testrouter);

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads/AccountActive', express.static(path.join(__dirname, 'uploads/AccountActive')));
app.use('/uploads/Categories', express.static(path.join(__dirname, 'uploads/Categories')));


// Start the Express server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});