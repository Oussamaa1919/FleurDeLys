const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();


// Connect Database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

// Init Middleware
app.use(express.json());

// Define Routes

app.use('/api/auth', require('./routes/api/auth'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server started on Port ${PORT}`));