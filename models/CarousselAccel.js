const mongoose = require('mongoose');

const CarousselAccel = new mongoose.Schema({
  
  text: {
    type: String,
  
  },
  photos: [{
    type: String,
  }],
  
  
});

module.exports = mongoose.model('carousselaccel', CarousselAccel);
