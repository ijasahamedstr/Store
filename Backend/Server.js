import express from 'express';
import cors from 'cors';
import connectDB from './lib/db.js';
import Accountrouter from './routes/AccountRegisterCustomer.route.js';
import path from 'path';
import { fileURLToPath } from 'url';
import Accountsellerrouter from './routes/AccountRegisterSeller.route.js';
import AccountAdminrouter from './routes/Admin/AccountRegisterAdmin.route.js';
import AccountAdminloginrouter from './routes/Admin/AccountLogin.route.js';
import Categoriesrouter from './routes/Admin/Categories.route.js';


const app = express();
const port = 8000;

// Connect to the database
connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));
app.use(express.json()); // Middleware to parse JSON bodies

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//CLIENT -> MIDDLEWARE -> SERVER
app.use('/register',Accountrouter);

app.use('/registerseller',Accountsellerrouter);



//ADMIN -> MIDDLEWARE -> SERVER
app.use('/Adminregister',AccountAdminrouter);

app.use('/Adminlogin', AccountAdminloginrouter);

app.use('/categories', Categoriesrouter);


// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads/AccountActive', express.static(path.join(__dirname, 'uploads/AccountActive')));
app.use('/uploads/Categories', express.static(path.join(__dirname, 'uploads/Categories')));



// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
