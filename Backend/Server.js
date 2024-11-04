import express from 'express';
import cors from 'cors';
import connectDB from './lib/db.js';

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


// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
