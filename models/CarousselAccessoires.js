const mongoose = require('mongoose');

const CarousselAccessoires = new mongoose.Schema({
  
  text: {
    type: String,
  
  },
  photos: [{
    type: String,
  }],
  
  
});

module.exports = mongoose.model('carousselaccessoires', CarousselAccessoires);
