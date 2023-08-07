const mongoose = require('mongoose');

const ForfaitsCaroussel = new mongoose.Schema({
  
  text: {
    type: String,
  
  },
  photos: [{
    type: String,
  }],
  
  
});

module.exports = mongoose.model('forfaitscaroussel', ForfaitsCaroussel);
