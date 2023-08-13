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
app.use('/api/carousselformation',require('./routes/api/carousselFormation'));
app.use('/api/cardformation',require('./routes/api/cardFormation'));
app.use('/api/formations',require('./routes/api/formations'));
app.use('/api/equipecaroussel',require('./routes/api/EquipeCaroussel'));
app.use('/api/equipeimage',require('./routes/api/equipeImage'));
app.use('/api/actualites',require('./routes/api/actualites'));
app.use('/api/actualitesimage',require('./routes/api/actualitesImage'));
app.use('/api/forfait',require('./routes/api/forfait'));
app.use('/api/carousselmimi',require('./routes/api/carousselMimi'));
app.use('/api/carousselaccessoires',require('./routes/api/carousselAccessoires'));






const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server started on Port ${PORT}`));