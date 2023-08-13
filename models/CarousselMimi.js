const mongoose = require('mongoose');

const CarousselMimi = new mongoose.Schema({
  
  text: {
    type: String,
  
  },
  photos: [{
    type: String,
  }],
  
  
});

module.exports = mongoose.model('carousselmimi', CarousselMimi);
