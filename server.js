const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const storage = require('./middleware/storage')


const app = express();

// multer middleware declarations 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: false }));
// Connect Database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

// Init Middleware
app.use(express.json());

// Define Routes

app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/videoaccuiel',require('./routes/api/VideoAccueil'));
app.use('/api/informationaccuiel',require('./routes/api/informationAccueil'));
app.use('/api/forfaitscaroussel',require('./routes/api/forfaitsCaroussel'));
app.use('/api/carousselaccel',require('./routes/api/carousselAccel'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server started on Port ${PORT}`));